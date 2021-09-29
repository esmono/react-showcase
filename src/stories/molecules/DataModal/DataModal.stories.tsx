/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DataModal from './DataModal';

export default {
  title: 'Molecules/DataModal',
  component: DataModal,
  argTypes: {},
} as ComponentMeta<typeof DataModal>;

const Template: ComponentStory<typeof DataModal> = (args) => <DataModal {...args} />;

const characterData = {
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  origin: {
    name: 'Earch (C-137)',
  },
  location: {
    name: 'Earth (Replacement Dimension)',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

export const Default = Template.bind({});
Default.args = {
  handleClose: () => {},
  character: characterData,
  open: false,
};

export const ModalOpen = Template.bind({});
ModalOpen.args = {
  handleClose: () => {},
  character: characterData,
  open: true,
};
