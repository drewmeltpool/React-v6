import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import FlatList from '../../../../components/FlatList';
import { navs, controls } from './nav';
import './adminAside.scss';
import Title from '../../../../components/Title';

const AdminAside: React.FC = () => {
  return (
    <aside className="admin-aside">
      <FlatList
        className="aside-box card"
        tag="ul"
        element="li"
        data={navs}
        itemProps={{ className: 'aside-nav-item' }}
        component={({ to, icon, text }) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'aside-nav-link aside-nav-link--active'
                : 'aside-nav-link'
            }
            to={to}
          >
            <Icon icon={icon} className="aside-nav-icon" />

            <Title variant="info">{text}</Title>
          </NavLink>
        )}
      />

      <FlatList
        className="aside-box card"
        tag="ul"
        element="li"
        data={controls}
        itemProps={{ className: 'aside-nav-item' }}
        component={({ to, icon, text }) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'aside-nav-link aside-nav-link--active'
                : 'aside-nav-link'
            }
            to={to}
          >
            <Icon icon={icon} className="aside-nav-icon" />
            <Title variant="info">{text}</Title>
          </NavLink>
        )}
      />
    </aside>
  );
};

export default AdminAside;
