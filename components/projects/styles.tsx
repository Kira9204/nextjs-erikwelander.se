import React from 'react';
import styled from 'styled-components';
import { SIZE_PAD_IPAD_PORTRAIT, SIZE_PC_LANDSCAPE, SIZE_PHONE_PORTRAIT } from '../globals/constants';

export const InitialContentSpacingStyle = styled.div`
  margin-top: 50px;
`;

const PAGE_MARGIN = 25;

export const ProjectContainer = styled.div`
  margin: 0 auto;
  font-size: 18px;
  margin-bottom: 100px;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    width: 100%;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    display: flex;
    margin-left: ${PAGE_MARGIN}px;
    margin-right: ${PAGE_MARGIN}px;
  }
`;

export const Project = styled.div`
  width: 100%;
`;

export const ProjectImagesContainer = styled.div`
  float: right;
  margin-right: ${PAGE_MARGIN * 2}px;
  margin-left: ${PAGE_MARGIN * 2}px;
`;

export const ProjectTextContainer = styled.div`
  float: none;
  margin-right: 40px;
  font-size: 20px;

  /* Preserve newlines */
  white-space: pre-line;
`;

export const ProjectTextHeader = styled.strong`
  display: block;
  font-size: 20px;
`;

export const ProjectListItem = styled.li`
  margin-bottom: 10px;
`;

export const ImgObs = styled.img.attrs({ src: '/img/jpg/obs-screenshot.jpg', alt: '/img/jpg/obs-screenshot.jpg' })`
  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    width: 300px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    width: 400px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    width: unset;
  }
`;

export const ImgTimberwolf = styled.img.attrs({ src: '/img/jpg/timberwolf.jpg', alt: '/img/jpg/timberwolf.jpg' })`
  margin-right: 10px;
  
  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    width: 300px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    width: 400px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    width: unset;
  }
`;

export const ImgTimberwolfWallPaper = styled.img.attrs({
  src: '/img/jpg/mechwarrior-timberwolf.jpg',
  alt: '/img/jpg/mechwarrior-timberwolf.jpg',
})`
  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    display: block;
    width: 300px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    width: 400px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    display: inline-block;
    width: unset;
  }
`;
