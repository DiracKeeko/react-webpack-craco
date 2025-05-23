// src/App.tsx
// 入口文件 仅有一层路由，不需要Outlet

import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const routes = [
  { path: "/home", component: "Home" },
  { path: "/about", component: "About" },
];

// 主应用组件
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <div id="app" key={"root-app"}>
          {/* 导航栏 */}
          <div id="nav">
            AppPlus01
            {routes.map((route) => {
              return (
                <React.Fragment key={route.component}>
                  <Link to={route.path}>{route.component}</Link>|
                </React.Fragment>
              );
            })}
          </div>
          {/* 路由视图 */}
          <Suspense>
            <Routes>
              {routes.map((route) => {
                const Component = lazy(
                  () => import(`@/pages/${route.component}`)
                );
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<Component />}
                  />
                );
              })}
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
