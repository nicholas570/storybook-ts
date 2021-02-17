import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';

import './Form.css';

const Form: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(console.log(e.currentTarget));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        type="email"
        size="large"
        placeholder="Email"
        onChange={handleChange}
      />
      <Button primary submit size="large" label="Valider" />
    </form>
  );
};

export default Form;
