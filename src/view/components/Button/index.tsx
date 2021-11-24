import React from 'react';
import classNames from '../../../utils/classNames';
import './button.scss';

type VariantType = 'primary' | 'icon' | 'danger';

interface IButton {
  text?: string | React.ReactNode;
  variant?: VariantType;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
  rounded?: boolean;
  [key: string]: any;
}

const Button: React.FC<IButton> = ({
  text,
  children,
  className,
  onClick,
  variant,
  outline,
  rounded,
  ...rest
}) => (
  <button
    onClick={onClick}
    className={classNames(
      'btn',
      variant && `btn--${variant}`,
      outline && 'outline',
      rounded && 'rounded',
      className
    )}
    {...rest}
  >
    {text || children}
  </button>
);

export default Button;
