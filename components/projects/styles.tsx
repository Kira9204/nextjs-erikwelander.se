'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { SIZE_PAD_IPAD_PORTRAIT, SIZE_PC_LANDSCAPE, SIZE_PHONE_PORTRAIT } from '../globals/constants';
import obsScreenshot from '../../assets/img/png/obs-screenshot.png';
import timberwolf from '../../assets/img/jpg/timberwolf.jpg';
import timberwolfWallpaper from '../../assets/img/jpg/wallpaper-mechwarrior-timberwolf.jpg';

export const InitialContentSpacingStyle = styled.div`
  margin-top: 50px;
`;

export const ProjectContainer = styled.div`
  margin: 0 auto;
  font-size: 18px;
  margin-bottom: 100px;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    width: 100%;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    display: flex;
  }
`;

export const Project = styled.div`
  width: 100%;
`;

export const ProjectTextContainer = styled.div`
  float: none;
  margin-right: 40px;
  font-size: 16px;

  /* Preserve newlines */
  white-space: pre-line;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    margin-top: 0;
  }
`;

export const ProjectTextHeader = styled.strong`
  display: block;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 16px;
    margin-bottom: 10px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 18px;
  }
`;

export const ProjectListItem = styled.li`
  margin-bottom: 10px;
`;

export const ImgObs = styled(Image).attrs({ src: obsScreenshot, alt: 'OBS Studio screenshot' })`
  float: right;
  height: auto;
  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    width: 300px;
    margin-right: 50px;
    margin-bottom: 10px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    width: 400px;
    margin-right: 0;
    margin-bottom: 0;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    width: unset;
  }
`;

export const ImgTimberwolf = styled(Image).attrs({ src: timberwolf, alt: 'Mechwarrior Timberwolf 3D print' })`
  float: right;
  margin-left: 10px;
  height: auto;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    width: 300px;
    margin-right: 50px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    width: 400px;
    margin-right: 0;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    width: unset;
  }
`;

export const ImgTimberwolfWallPaper = styled(Image).attrs({
  src: timberwolfWallpaper,
  alt: 'Mechwarrior Timberwolf wallpaper',
})`
  float: right;
  height: auto;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    display: block;
    width: 300px;
    margin-right: 50px;
    margin-bottom: 10px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    width: 400px;
    margin-right: 0;
    margin-bottom: 0;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    display: inline-block;
    width: unset;
  }
`;
