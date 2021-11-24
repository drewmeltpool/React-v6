import React from 'react';
import classNames from '../../../utils/classNames';
import './title.scss';

interface ITitle {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  variant?: 'primary' | 'secondary' | 'info';
  [key: string]: any;
}

const Title: React.FC<ITitle> = ({
  tag: Tag = 'h4',
  children,
  className,
  variant,
  ...rest
}) => {
  return (
    <Tag
      className={classNames('title', variant && `title--${variant}`, className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Title;
