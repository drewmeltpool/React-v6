import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminAside from './components/AdminAside';
import AdminNavbar from './components/AdminNavbar';
import Footer from '../../components/Footer';
import './adminLayout.scss';

const Admin: React.FC = () => {
  return (
    <div className="page">
      <AdminNavbar />
      <main className="main admin-main container">
        <AdminAside />
        <div className="admin-content">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
