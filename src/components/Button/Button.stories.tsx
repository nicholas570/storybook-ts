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
  label: 'Button',
  onClick: (): void => console.log('test'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

// Both works but no addons with this syntax
export const Small = (): JSX.Element => (
  <Button label="Button" size="small" primary />
);
