'use client';

import styled from 'styled-components';
import { MarkdownTextStyle } from '../globals/styles';
import { CVContainerStyle } from '../resume/styles';

import { SIZE_PAD_IPAD_PORTRAIT, SIZE_PHONE_PORTRAIT } from '../globals/constants';

export const LetterContainer = styled(CVContainerStyle)`
  ${MarkdownTextStyle} {
    p {
      margin: 0;
    }

    p + p {
      margin-top: 0.4em;
    }
  }
`;

export const LetterBody = styled.div`
  width: 95%;
  margin: 0 auto 24px;
`;

export const LetterHeader = styled.h1`
  font-weight: 400;
  margin-bottom: 8px;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 20px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 22px;
  }
`;
