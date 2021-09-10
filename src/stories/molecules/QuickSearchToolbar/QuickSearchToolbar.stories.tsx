/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import QuickSearchToolbar from './QuickSearchToolbar';

export default {
  title: 'Molecules/QuickSearchToolbar',
  component: QuickSearchToolbar,
  argTypes: {},
} as ComponentMeta<typeof QuickSearchToolbar>;

const Template: ComponentStory<typeof QuickSearchToolbar> = (
  args,
) => <QuickSearchToolbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  clearSearch: action('Clear search'),
  onChange: action('On change'),
};
