import React from 'react';

import './Button.css';

export interface ButtonProps {
  submit?: boolean;
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  submit,
  primary,
  backgroundColor,
  size = 'medium',
  label = 'Button',
  onClick,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' ',
      )}
      style={{ backgroundColor }}
      {...props}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
