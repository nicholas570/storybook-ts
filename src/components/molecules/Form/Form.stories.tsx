import React from 'react';
import { Story, Meta } from '@storybook/react';

import Form from './Form';

export default {
  title: 'Form/Form',
  component: Form,
} as Meta;

const Template: Story = (args) => <Form {...args} />;

export const form = Template.bind({});
form.args = {};
