'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { SIZE_PAD_IPAD_PORTRAIT, SIZE_PHONE_PORTRAIT, SIZE_PC_LANDSCAPE } from '../globals/constants';

export const LetterContainer = styled.div`
  font-weight: 400;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 16px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 18px;
  }

  /* Preserve newlines */
  white-space: pre-line;
`;

const IMAGE_SIZE = 36;
export const DownloadPDFImage = styled(Image)`
  width: ${IMAGE_SIZE}px;
  height: auto;
  vertical-align: middle;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    width: ${IMAGE_SIZE - 14}px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    width: ${IMAGE_SIZE - 10}px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    width: ${IMAGE_SIZE - 5}px;
  }
`;

export const DownloadPDFText = styled.span`
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: underline;
`;

export const LetterHeader = styled.h1`
  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 24px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 28px;
  }
`;
