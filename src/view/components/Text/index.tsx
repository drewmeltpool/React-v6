import React from 'react';
import classNames from '../../../utils/classNames';

interface IText {
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  variant?: string;
  [key: string]: any;
}

const Text: React.FC<IText> = ({
  tag: Tag = 'p',
  children,
  className,
  variant,
  ...rest
}) => {
  return (
    <Tag
      className={classNames('text', variant && `text--${variant}`, className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Text;
