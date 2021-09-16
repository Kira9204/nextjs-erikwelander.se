import React from 'react';
import styled from 'styled-components';
import {
  COLOR_GRAY_BORDER,
  COLOR_WHITE_BACKGROUND,
  SIZE_PAD_IPAD_PORTRAIT,
  SIZE_PC_LANDSCAPE,
  SIZE_PHONE_LANDSCAPE,
  SIZE_PHONE_PORTRAIT,
} from '../globals/constants';

export const InitialContentSpacingStyle = styled.div`
  margin-top: 50px;
`;

const PAGE_MARGIN = 50;
export const ProfileContainerStyle = styled.div`
  margin-top: 14px;

  @media (min-width: ${SIZE_PHONE_LANDSCAPE}px) {
    display: flex;
  }
`;

const PROFILE_PICTURE_SIZE = 250;
export const ProfilePictureStyle = styled.div`
  border-radius: 25px;
  border: 4px solid ${COLOR_GRAY_BORDER};
  padding: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-clip: content-box;
  background-image: url(../img/png/erik-welander.png);

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    width: ${PROFILE_PICTURE_SIZE - 50}px;
    height: ${PROFILE_PICTURE_SIZE - 50}px;
    background-size: ${PROFILE_PICTURE_SIZE - 50}px ${PROFILE_PICTURE_SIZE - 50}px;
    margin: 0 auto;
  }

  @media (min-width: ${SIZE_PHONE_LANDSCAPE}px) {
    width: ${PROFILE_PICTURE_SIZE - 50}px;
    height: ${PROFILE_PICTURE_SIZE - 50}px;
    background-size: ${PROFILE_PICTURE_SIZE - 50}px ${PROFILE_PICTURE_SIZE - 50}px;
    margin: 0;
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

export const ProfileArrowStyle = styled.div`
  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    display: none;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    display: block;
    border-left: 0px solid transparent;
    border-right: 100px solid ${COLOR_GRAY_BORDER};
    border-top: 120px solid transparent;
    border-bottom: 120px solid transparent;
  }
`;

export const ProfileArrowContentStyle = styled.div`
  width: 100%;
  background: ${COLOR_GRAY_BORDER};

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    border-radius: 20px;
  }

  @media (min-width: ${SIZE_PHONE_LANDSCAPE}px) {
    margin-left: 10px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    margin: 0;
    margin-left: 20px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    margin-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0px;
  }
`;

export const ProfileArrowGridStyle = styled.div`
  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    height: unset;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    height: ${PROFILE_PICTURE_SIZE}px;
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;

export const ProfileArrowGridContainerLeftStyle = styled.div`
  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    margin: 20px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    height: ${PROFILE_PICTURE_SIZE}px;
    margin-left: 50px;
    margin-top: 30px;
    margin-top: ${PROFILE_PICTURE_SIZE / 4 - 10}px;
  }
`;

export const ProfileArrowGridNameStyle = styled.h1`
  text-transform: uppercase;
  font-weight: 400;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 26px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 28px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    font-size: 30px;
  }
`;

export const ProfileArrowOccupationStyle = styled.h2`
  font-style: normal;
  font-weight: 400;
  margin-top: 15px;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 20px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 22px;
  }
`;

export const ProfileQuoteStyle = styled.h3`
  margin-top: 5px;

  font-size: 16px;
  font-style: italic;
  font-weight: 400;
`;

export const ProfileArrowContactStyle = styled.div`
  word-break: break-all;
  padding-bottom: 10px;

  &:first-of-type {
    padding-top: 10px;
  }

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    margin-left: 16px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    margin-left: 0;
    padding-bottom: 15px;
    
    &:first-of-type {
      padding-top: 14px;
    }
  }
`;

const IMAGE_SIZE = 48;
export const ProfileArrowContactImageStyle = styled.img`
  width: ${IMAGE_SIZE}px;
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

export const ProfileArrowContactTextStyle = styled.span`
  color: #000;
  text-decoration: underline;
  vertical-align: middle;
  margin-left: 10px;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 18px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 20px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    font-size: 22px;
  }
`;

export const CVContainerStyle = styled.div`
  font-size: 24px;
  font-weight: 400;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    margin-top: 50px;
  }

  @media (min-width: ${SIZE_PHONE_LANDSCAPE}px) {
    margin-top: 80px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    margin: 150px;
    margin-left: ${PAGE_MARGIN}px;
    margin-right: ${PAGE_MARGIN}px;
    margin-bottom: ${PAGE_MARGIN}px;
  }
`;

export const CVSectionContainerTopMarginStyle = styled.div`
  margin-top: 60px;
`;

const PC_CV_WIDTH = 95;
export const CVSectionDownloadContainerStyle = styled.div`
  width: 100%;
  display: flex;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    position: relative;
    left: 18px;
    margin-bottom: 20px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    width: ${PC_CV_WIDTH}%;
    margin: 0 auto;
    margin-top: 150px;
    margin-bottom: ${PAGE_MARGIN}px;
  }
`;

export const CVSectionDownloadImageStyle = styled.img`
  width: 40px;
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

export const CVSectionDownloadTextStyle = styled.span`
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: underline;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 18px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 20px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    font-size: 22px;
  }
`;

export const CVSectionContainerStyle = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    width: ${PC_CV_WIDTH}%;
    margin: 0 auto;
  }
`;

export const CVSectionBubbleStyle = styled.div`
  background: ${COLOR_GRAY_BORDER};
  border-radius: 20px;
  padding: 4px 20px;
  width: fit-content;
`;

export const CVSectionBubbleImageStyle = styled.img`
  vertical-align: middle;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    width: ${IMAGE_SIZE - 12}px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    width: ${IMAGE_SIZE - 8}px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    width: ${IMAGE_SIZE - 3}px;
  }
`;

export const CVSectionBubbleTextStyle = styled.span`
  margin-left: 10px;
  vertical-align: middle;
`;

export const CVSectionBubbleFillLineStyle = styled.div`
  display: flex;
  flex-grow: 1;
  z-index: -1;

  margin-left: -20px;
  background: ${COLOR_GRAY_BORDER};
  border: 18px solid ${COLOR_WHITE_BACKGROUND};
  border-radius: 40px;
`;

export const CVSectionTableContainerStyle = styled.div`
  width: 93%;
  margin: 0 auto;
`;

export const CVSectionTableStyle = styled.table`
  margin-top: 20px;
  width: 100%;
  border-spacing: 0 5px;
`;

export const CVSectionColumnPeriodStyle = styled.td`
  width: 250px;
  letter-spacing: 1px;
  padding: 0;
  vertical-align: top;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 18px;
    margin-bottom: 4px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 16px;
  }
`;

export const CVSectionRowContentStyle = styled.tr`
  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    display: grid;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    display: table-row;
  }
`;

export const CVSectionColumnContentStyle = styled.td`
  padding: 0;
`;

export const CVSectionPositionStyle = styled.div`
  font-weight: bold;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 18px;
    margin-bottom: 4px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 16px;
  }
`;

export const CVSectionCompanyStyle = styled.div`
  font-weight: normal;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 18px;
    margin-bottom: 8px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 16px;
  }
`;

export const CVSectionCompanyLinkStyle = styled.a`
  text-decoration: underline;
`;

export const CVSectionPositionTags = styled.div`
  font-size: 18px;
  font-style: italic;
`;

export const CVSectionPositionText = styled.div`
  margin-top: 6px;
  margin-bottom: 20px;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 18px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    font-size: 16px;
  }

  /* Preserve newlines */
  white-space: pre-line;
`;
