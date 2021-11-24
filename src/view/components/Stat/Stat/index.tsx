import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classNames from '../../../../utils/classNames';
import Title from '../../Title';
import './stat.scss';

interface IStat {
  icon: IconDefinition;
  title: string;
  value: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'warning'
    | 'danger'
    | 'dark'
    | 'purple';
}

const Stat: React.FC<IStat> = ({ icon, title, value, variant }) => {
  return (
    <div className={classNames('stat', `stat--${variant}`)}>
      <Icon icon={icon} className="stat-icon" />
      <Title variant="secondary">{value}</Title>
      <Title variant="info">{title}</Title>
    </div>
  );
};

export default Stat;
