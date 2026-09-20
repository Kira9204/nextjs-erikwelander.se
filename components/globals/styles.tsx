'use client';

import styled from 'styled-components';
import { SIZE_PAD_IPAD_PORTRAIT, SIZE_PHONE_PORTRAIT } from './constants';
import { FONT_WEIGHT } from '../home/styles';

export const LinkUnderlined = styled.a`
  text-decoration: underline;
`;

export const LinkUnderlineItalic = styled.a`
  text-decoration: underline;
  font-style: italic;
`;
export const UnstyledCommaList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-style: italic;

  li {
    display: inline;
  }
  li::after {
    content: ', ';
  }
  li:last-child::after {
    content: '.';
  }
`;

export const SkillsListContainer = styled.div`
  margin-top: 5px;
  font-weight: ${FONT_WEIGHT};

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 14px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 16px;
  }
`;
