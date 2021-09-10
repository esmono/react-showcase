/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Product from './Product';
import * as data from '../../assets/products.json';

export default {
  title: 'Templates/Product',
  component: Product,
  argTypes: {},
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = (args) => <Product {...args} />;

export const Default = Template.bind({});
Default.args = {
  products: data.products,
};
