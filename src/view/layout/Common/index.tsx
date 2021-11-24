import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';

const Common: React.FC = () => {
  return (
    <div className="page">
      <Navbar>
        <Logo />

        <div className="navbar-box">
          <Link to="/sign-up" className="nav-link link">
            <Button text="Sign up" outline variant="primary" />
          </Link>
          <Link to="/sign-in" className="nav-link link">
            <Button text="Sign in" variant="primary" />
          </Link>
        </div>
      </Navbar>
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Common;
