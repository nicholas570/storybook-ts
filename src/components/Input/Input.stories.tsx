import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from './Input';

export default {
  title: 'Form/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  type: 'text',
  placeholder: 'Password',
  onChange: (e): void => console.log(e.currentTarget.value),
};
