// src/App.tsx
// 入口文件 可能存在嵌套路由，需要Outlet

import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Outlet, Link } from "react-router-dom";

const routes = [
  { path: "/home", component: "Home" },
  { path: "/about", component: "About" },
];

// 主应用组件
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div id="app">
        {/* 导航栏 */}
        <div id="nav">
        AppPlus02
          {routes.map((route) => {
            return (
              // React 要求 key 设置在 map 出来的最外层元素上，因此这里不能用<></>，改用Fragment
              <React.Fragment key={route.path}>
                <Link to={route.path}>{route.component}</Link>|
              </React.Fragment>
            );
          })}
        </div>

        {/* 路由视图 */}
        <Suspense>
          <Routes>
            <Route element={<Outlet />}>
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
            </Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
