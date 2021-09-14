import React from 'react';
import styled from 'styled-components';
import {
  COLOR_GRAY_BORDER,
  COLOR_WHITE_BACKGROUND,
  SIZE_PAD_IPAD_LANDSCAPE,
  SIZE_PAD_IPAD_PORTRAIT,
  SIZE_PAD_IPAD_PRO_LANDSCAPE,
  SIZE_PAD_IPAD_PRO_PORTRAIT,
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
    margin-left: ${PAGE_MARGIN / 2}px;
    margin-right: ${PAGE_MARGIN / 2}px;
  }

  @media (min-width: ${SIZE_PAD_IPAD_PORTRAIT}px) {
    display: flex;
    margin-left: ${PAGE_MARGIN}px;
    margin-right: ${PAGE_MARGIN}px;
  }
`;

const PROFILE_PICTURE_SIZE = 250;
export const ProfilePictureStyle = styled.div`
  height: ${PROFILE_PICTURE_SIZE}px;
  border-radius: 25px;
  border: 4px solid ${COLOR_GRAY_BORDER};
  padding: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-clip: content-box;
  background-size: ${PROFILE_PICTURE_SIZE}px ${PROFILE_PICTURE_SIZE}px;
  background-image: url(../img/png/erik-welander.png);

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    width: unset;
  }

  @media (min-width: ${SIZE_PHONE_LANDSCAPE}px) {
    width: ${PROFILE_PICTURE_SIZE}px;
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
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 400;
`;

export const ProfileArrowOccupationStyle = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  margin-top: 15px;
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
    margin-left: 10px;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    margin-left: 0;
  }
`;

const IMAGE_SIZE = 48;
export const ProfileArrowContactImageStyle = styled.img`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  vertical-align: middle;
`;

export const ProfileArrowContactTextStyle = styled.span`
  color: #000;
  text-decoration: underline;
  vertical-align: middle;
  margin-left: 10px;

  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    font-size: 22px;
  }

  @media (min-width: ${SIZE_PHONE_LANDSCAPE}px) {
    font-size: 24px;
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
    left: 15px;
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
`;

export const CVSectionDownloadTextStyle = styled.span`
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: underline;
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
  width: 40px;
  vertical-align: middle;
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
  font-size: 24px;
  letter-spacing: 1px;
  padding: 0;
  vertical-align: top;
`;

export const CVSectionRowContentStyle = styled.tr`
  @media (min-width: ${SIZE_PHONE_PORTRAIT}px) {
    display: grid;
  }

  @media (min-width: ${SIZE_PC_LANDSCAPE}px) {
    display: unset;
  }
`;

export const CVSectionColumnContentStyle = styled.td`
  padding: 0;
`;

export const CVSectionPositionStyle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const CVSectionCompanyStyle = styled.div`
  font-size: 22px;
  font-weight: normal;
`;

export const CVSectionCompanyLinkStyle = styled.a`
  text-decoration: underline;
`;

export const CVSectionPositionTags = styled.div`
  font-size: 20px;
  font-style: italic;
`;

export const CVSectionPositionText = styled.div`
  margin-top: 6px;
  margin-bottom: 40px;
  font-size: 20px;

  /* Preserve newlines */
  white-space: pre-line;
`;
