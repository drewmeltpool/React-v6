import React from 'react';
import {
  faCheckCircle,
  faExclamationTriangle,
  faInfo,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import classNames from '../../../utils/classNames';
import { IProps } from './IProps';

import './notification.scss';
import { useToast } from '../../../hooks/useToast';
import Button from '../Button';

const notificationIcon = {
  info: faInfo,
  warning: faExclamationTriangle,
  error: faTimes,
  success: faCheckCircle,
};

const Notification: React.FC<IProps> = ({ type, text, id }) => {
  const { remove } = useToast();
  const icon = notificationIcon[type];

  return (
    <div className={classNames('notification', `notification--${type}`)}>
      <div className="notification-box">
        <Icon icon={icon} color="inherit" className="notification-icon" />
        <p className="notification-text">{text}</p>
      </div>
      <Button
        className="notification-btn"
        text="ok"
        variant="primary"
        outline
        onClick={() => remove(id)}
      />
    </div>
  );
};

export default Notification;
