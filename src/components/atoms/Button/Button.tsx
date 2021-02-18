import React from 'react';

import './Button.css';

export interface ButtonProps {
  primary?: boolean;
  disabledB?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  success: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  primary,
  disabledB,
  backgroundColor,
  size = 'medium',
  label = 'Button',
  onClick,
  success,
  ...props
}) => {
  const mode = primary && 'storybook-button--primary';
  const isDisabled = disabledB && 'button-disabled';
  const isSuccess = success && 'button-success';
  return (
    <button
      type="button"
      disabled={disabledB}
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        mode,
        isDisabled,
        isSuccess,
      ].join(' ')}
      {...props}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
