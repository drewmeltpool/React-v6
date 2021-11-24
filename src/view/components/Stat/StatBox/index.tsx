import React from 'react';
import classNames from '../../../../utils/classNames';

import './statBox.scss';

interface IStatBox {
  column: '1' | '2' | '3' | '4';
}

const StatBox: React.FC<IStatBox> = ({ column, children }) => {
  return (
    <div className={classNames('stat-box', `stat-box--${column}`)}>
      {children}
    </div>
  );
};

export default StatBox;
