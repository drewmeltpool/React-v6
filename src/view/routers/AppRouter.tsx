import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Button from '../components/Button';
import AdminLayout from '../layout/Admin';
import Common from '../layout/Common';
import Sign from '../layout/Sign';
import Admin from '../pages/Admin';
import AdminHome from '../pages/AdminHome';
import Home from '../pages/Home';
import PhotoEditor from '../pages/PhotoEditor';
import Settings from '../pages/Settings';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Users from '../pages/Users';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/admin" element={<AdminLayout />}>
      <Route path="home" element={<AdminHome />} />
      <Route path="folder" element={<Admin />} />
      <Route path="profile" element={<Button text="profile" />} />
      <Route path="users" element={<Users />} />
      <Route path="settings" element={<Settings />} />
      <Route path="notifications" element={<Button text="not" />} />
    </Route>
    <Route path="editor" element={<PhotoEditor />} />
    <Route path="/*" element={<Common />}>
      <Route path="" element={<Home />} />
      <Route path="/*" element={<Sign />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Route>
  </Routes>
);

export default AppRouter;
