// src/App.tsx
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Home from "@/pages/Home";
import About from "@/pages/About";

// 主应用组件
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div id="app">
        {/* 导航栏 */}
        <div id="nav">
          <Link to="/home">Home</Link> | <Link to="/about">About</Link>
        </div>

        {/* 路由视图 */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
