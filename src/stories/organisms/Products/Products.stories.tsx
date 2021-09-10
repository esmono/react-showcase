/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Products from './Products';
import * as data from '../../assets/products.json';

export default {
  title: 'Organisms/Products',
  component: Products,
  argTypes: {},
} as ComponentMeta<typeof Products>;

const pageSize = 5;
const rows = data.products;

const Template: ComponentStory<typeof Products> = (args) => <Products {...args} />;

export const Default = Template.bind({});
Default.args = { pageSize, rows };
