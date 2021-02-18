import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Valider',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  ...Primary.args,
  size: 'large',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  ...Primary.args,
  size: 'small',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Envoyé',
  success: true,
  disabledB: true,
};

export const SuccessLarge = Template.bind({});
SuccessLarge.args = {
  ...Success.args,
  size: 'large',
};

export const SuccessSmall = Template.bind({});
SuccessSmall.args = {
  ...Success.args,
  size: 'small',
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: true,
  label: 'Valider',
  disabledB: true,
};

export const DisabledLarge = Template.bind({});
DisabledLarge.args = {
  ...Disabled.args,
  size: 'large',
};

export const DisabledSmall = Template.bind({});
DisabledSmall.args = {
  ...Disabled.args,
  size: 'small',
};
