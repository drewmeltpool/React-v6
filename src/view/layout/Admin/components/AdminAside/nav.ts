import {
  faBell,
  faCog,
  faFolder,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export const navs = [
  {
    to: 'home',
    text: 'Home',
    icon: faHome,
  },
  {
    to: 'users',
    text: 'Users',
    icon: faUser,
  },
  {
    to: 'profile',
    text: 'Profile',
    icon: faUser,
  },
  {
    to: 'folder',
    text: 'Folders',
    icon: faFolder,
  },
];

export const controls = [
  {
    to: 'settings',
    text: 'Settings',
    icon: faCog,
  },
  {
    to: 'notifications',
    text: 'Notifications',
    icon: faBell,
  },
];
