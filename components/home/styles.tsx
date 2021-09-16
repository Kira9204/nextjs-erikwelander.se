import React from 'react';
import styled from 'styled-components';
import {
  COLOR_GRAY_BORDER,
  SIZE_PAD_IPAD_LANDSCAPE,
  SIZE_PAD_IPAD_PORTRAIT,
  SIZE_PC_LANDSCAPE,
  SIZE_PHONE_IPHONE_LANDSCAPE,
  SIZE_PHONE_IPHONE_PORTRAIT,
  SIZE_PHONE_IPHONEX_PORTRAIT,
  SIZE_PHONE_LANDSCAPE,
  SIZE_PHONE_PORTRAIT,
} from '../globals/constants';

export const InitialContentSpacingStyle = styled.div`
  margin-top: 50px;
`;

export const ProfileContainerStyle = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const PROFILE_PICTURE_SIZE = 300;
export const ProfilePictureStyle = styled.div`
  border-radius: 50%;
  border: 2px solid ${COLOR_GRAY_BORDER};
  padding: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-clip: content-box;
  background-image: url(../img/png/erik-welander.png);
  margin: 0 auto;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    width: ${PROFILE_PICTURE_SIZE - 100}px;
    height: ${PROFILE_PICTURE_SIZE - 100}px;
    background-size: ${PROFILE_PICTURE_SIZE - 100}px ${PROFILE_PICTURE_SIZE - 100}px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    width: ${PROFILE_PICTURE_SIZE - 50}px;
    height: ${PROFILE_PICTURE_SIZE - 50}px;
    background-size: ${PROFILE_PICTURE_SIZE - 50}px ${PROFILE_PICTURE_SIZE - 50}px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    width: ${PROFILE_PICTURE_SIZE - 20}px;
    height: ${PROFILE_PICTURE_SIZE - 20}px;
    background-size: ${PROFILE_PICTURE_SIZE - 20}px ${PROFILE_PICTURE_SIZE - 20}px;
  }
`;

const FONT_WEIGHT = 400;
export const ProfilePictureNameStyle = styled.h1`
  margin-top: 20px;
  text-transform: uppercase;
  font-weight: ${FONT_WEIGHT};

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 28px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 30px;
  }
`;

export const ProfilePictureOccupationStyle = styled.h2`
  margin-top: 10px;

  font-style: normal;
  font-weight: ${FONT_WEIGHT};

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 20px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 22px;
  }
`;

export const ProfilePictureQuoteStyle = styled.h3`
  margin-top: 5px;
  font-style: italic;
  font-weight: ${FONT_WEIGHT};

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 12px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 14px;
  }
`;

export const ContactItemsSpacingStyle = styled.div`
  margin-top: 50px;
`;

export const ContactItemsStyle = styled.div`
  margin-top: 50px;
  display: grid;
  grid-row-gap: 20px;
  margin: 0 auto;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px),
    (min-width: ${SIZE_PHONE_LANDSCAPE}px),
    (min-width: ${SIZE_PHONE_IPHONE_PORTRAIT}px and min-height: ${SIZE_PHONE_IPHONE_LANDSCAPE}px) {
    width: 100%;
    grid-template-columns: 50% 50%;
  }

  @media (min-width: ${SIZE_PHONE_IPHONEX_PORTRAIT}px) {
    width: 100%;
    grid-template-columns: 33% 33% 33%;
  }

  @media (min-width: ${SIZE_PAD_IPAD_LANDSCAPE}px) {
    width: 100%;
    grid-template-columns: 33% 33% 33%;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    width: 60%;
    grid-template-columns: 25% 25% 25% 25%;
  }
`;

export const ContactItemStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IMAGE_SIZE = 64;
export const ContactItemImageStyle = styled.img`
  display: block;
  margin: 0 auto;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    width: ${IMAGE_SIZE - 14}px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    width: ${IMAGE_SIZE - 10}px;
  }
`;

export const ContactItemTextStyle = styled.div`
  color: black;
  text-decoration: underline;
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
  word-break: break-all;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px),
    (min-width: ${SIZE_PHONE_LANDSCAPE}px),
    (min-width: ${SIZE_PHONE_IPHONE_PORTRAIT}px and min-height: ${SIZE_PHONE_IPHONE_LANDSCAPE}px) {
    height: ${IMAGE_SIZE - 14}px;
    font-size: 16px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    height: ${IMAGE_SIZE - 14}px;
    font-size: 18px;
  }
`;

export const IntroductionStyle = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 400;

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    width: 70%;
    margin: 0 auto;
  }

  /* Preserve newlines */
  white-space: pre-line;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 16px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 20px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    font-size: 22px;
  }
`;

export const IntroductionFirstWordStyle = styled.h4`
  font-weight: normal;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 20px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 32px;
  }
`;
