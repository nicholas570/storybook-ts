import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from './Input';

export default {
  title: 'Form/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Large = Template.bind({});
Large.args = {
  type: 'text',
  placeholder: 'Password',
  size: 'large',
  onChange: (e): void => console.log(e.currentTarget.value),
};

export const Medium = Template.bind({});
Medium.args = {
  type: 'text',
  placeholder: 'Password',
  onChange: (e): void => console.log(e.currentTarget.value),
};

export const Small = Template.bind({});
Small.args = {
  type: 'text',
  placeholder: 'Password',
  size: 'small',
  onChange: (e): void => console.log(e.currentTarget.value),
};
