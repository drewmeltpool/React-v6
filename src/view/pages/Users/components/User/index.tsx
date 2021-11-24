import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../../../../components/Button';
import classNames from '../../../../../utils/classNames';
import initials from '../../../../../utils/initials';
import { randomIndex } from '../../../../../utils/randomIndex';
import './user.scss';

interface IUser {
  name: string;
  email: string;
}

const variants = [
  'primary',
  'secondary',
  'dark',
  'danger',
  'warning',
  'info',
  'purple',
];

const User: React.FC<IUser> = ({ name, email }) => {
  return (
    <div className="user">
      <div
        className={classNames(
          'user-initials',
          `user--${variants[randomIndex(variants.length)]}`
        )}
      >
        {initials(name)}
      </div>

      <div className="user-info">
        <h4 className="user-name">{name}</h4>

        <h4 className="user-email">{email}</h4>
      </div>

      <Button className="user-btn" text={<Icon icon={faEllipsisV} />} />
    </div>
  );
};

export default User;
