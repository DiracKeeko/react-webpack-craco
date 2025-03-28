import React from "react";
import ReactLogo from "@/assets/logo512.png";

const Home: React.FC = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page!</p>
      <img src={ReactLogo} alt="Logo"/>
    </div>
  );
};

export default Home;
