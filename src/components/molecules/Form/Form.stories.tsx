import React from 'react';
import { Story, Meta } from '@storybook/react';

import Form from './Form';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';

import { Primary, Disabled, Success } from '../../atoms/Button/Button.stories';

export default {
  title: 'Form/Form',
  component: Form,
  subcomponents: { Input, Button },
} as Meta;

const Template: Story = (args) => <Form {...args} />;

export const FormDisabled = Template.bind({});
FormDisabled.args = {
  ...Disabled.args,
};

export const FormActive = Template.bind({});
FormActive.args = {
  ...Primary.args,
  disabledB: false,
};

export const FormSuccess = Template.bind({});
FormSuccess.args = {
  ...Success.args,
};
