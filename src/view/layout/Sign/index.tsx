import React from 'react';
import { Outlet } from 'react-router-dom';

import './sign.scss';

const SignIn: React.FC = () => {
  return (
    <div className="container">
      <div className="sign">
        <Outlet />
      </div>
    </div>
  );
};

export default SignIn;
