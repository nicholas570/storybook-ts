import React, { useState } from 'react';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';

import './Form.css';

const FormContainer: React.FC = ({ ...props }) => {
  const [value, setValue] = useState<string>();
  const [success, setSuccess] = useState<boolean>(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
    console.log(value);
  };

  return (
    <form className="form">
      <Input
        type="email"
        size="large"
        placeholder="Email"
        value={value}
        onChange={handleChange}
        {...props}
      />
      <Button
        primary
        size="large"
        label={success ? 'Envoyé' : 'Valider'}
        onClick={handleClick}
        disabledB={!value}
        success={success}
        {...props}
      />
    </form>
  );
};

export default FormContainer;
