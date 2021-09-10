/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ImageModal from './ImageModal';

export default {
  title: 'Molecules/ImageModal',
  component: ImageModal,
  argTypes: {},
} as ComponentMeta<typeof ImageModal>;

const Template: ComponentStory<typeof ImageModal> = (args) => <ImageModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleClose: () => {},
  imagePath: '01.png',
  open: false,
};

export const ModalOpen = Template.bind({});
ModalOpen.args = {
  handleClose: () => {},
  imagePath: '01.png',
  open: true,
};
