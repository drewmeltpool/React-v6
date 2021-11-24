import {
  faBell,
  faCog,
  faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button';
import Logo from '../../../../components/Logo';
import Navbar from '../../../../components/Navbar';

const AdminNavbar: React.FC = () => {
  return (
    <Navbar>
      <Logo />
      <div className="navbar-box">
        <Link to="settings" className="link">
          <Button variant="icon" text={<Icon icon={faCog} />} />
        </Link>
        <Link to="notifications" className="link">
          <Button variant="icon" text={<Icon icon={faBell} />} />
        </Link>
        <Button variant="icon" text={<Icon icon={faGlobeAmericas} />} />

        <Link to="/" className="link">
          <Button text="Log out" variant="primary" outline />
        </Link>
      </div>
    </Navbar>
  );
};

export default AdminNavbar;
