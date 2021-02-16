import React from 'react';

import './Input.css';

export interface InputProps {
  type: string;
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  size = 'medium',
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={['input', `input-${size}`].join(' ')}
      onChange={onChange}
    />
  );
};
