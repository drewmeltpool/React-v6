import React from 'react';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import './logo.scss';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="logo link">
      <Icon icon={faCameraRetro} color="#6E41E2" size="2x" />
    </Link>
  );
};

export default Logo;
