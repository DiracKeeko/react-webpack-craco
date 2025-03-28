import React from 'react';
import { Navigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  // 这里控制路由跳转
  const handleNavigation = (path: string) => {
    return <Navigate to={path} />;
  };

  return (
    <div style={{ padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
      <button
        onClick={() => handleNavigation('/home')}
        style={{ marginRight: '10px', padding: '10px', backgroundColor: '#61dafb', border: 'none' }}
      >
        Go to Home
      </button>
      <button
        onClick={() => handleNavigation('/about')}
        style={{ padding: '10px', backgroundColor: '#61dafb', border: 'none' }}
      >
        Go to About
      </button>
    </div>
  );
};

export default Navigation;
