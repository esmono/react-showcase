/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Characters from './Characters';
import * as data from '../../assets/characters.json';

export default {
  title: 'Templates/Characters',
  component: Characters,
  argTypes: {},
} as ComponentMeta<typeof Characters>;

const Template: ComponentStory<typeof Characters> = (args) => <Characters {...args} />;

const characterInfo = data.results[0];
const handleCharacterData = (id: number) => data.results[id - 1];

export const Default = Template.bind({});
Default.args = {
  characterInfo,
  handleCharacterData,
  rows: data.results,
};
