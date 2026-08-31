import React from 'react';
import { getTranslations } from 'next-intl/server';
import {
  InitialContentSpacingStyle,
  Project,
  ProjectListItem,
  ProjectContainer,
  ProjectTextContainer,
  ProjectTextHeader,
  ImgObs,
  ImgTimberwolf,
  ImgTimberwolfWallPaper,
} from '../../../components/projects/styles';
import { LinkUnderlined } from '../../../components/globals/styles';

export default async function Projects({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'projects' });

  return (
    <>
      <InitialContentSpacingStyle />
      <ProjectContainer>
        <Project>
          <a href={'/img/png/obs-screenshot-full.png'} target={'_blank'} rel="noreferrer">
            <ImgObs />
          </a>
          <ProjectTextContainer>
            <ProjectTextHeader>{t('PROJECT_STREAMING_SETUP_TITLE')}</ProjectTextHeader>
            <p>{t('PROJECT_STREAMING_SETUP_INTRO_TEXT')}</p>
            <ul>
              <ProjectListItem>{t('PROJECT_STREAMING_SETUP_AUDIO_TEXT')}</ProjectListItem>
              <ProjectListItem>{t('PROJECT_STREAMING_SETUP_SOFTWARE_TEXT')}</ProjectListItem>
              <ProjectListItem>{t('PROJECT_STREAMING_SETUP_MOCAP_VR_TEXT')}</ProjectListItem>
            </ul>
            <p>{t('PROJECT_STREAMING_SETUP_VTUBER_TEXT')}</p>
          </ProjectTextContainer>
        </Project>
      </ProjectContainer>
      <ProjectContainer>
        <Project>
          <a href={'/img/jpg/timberwolf-full.jpg'} target={'_blank'} rel="noreferrer">
            <ImgTimberwolf />
          </a>
          <a href={'/img/jpg/wallpaper-mechwarrior-timberwolf-full.jpg'} target={'_blank'} rel="noreferrer">
            <ImgTimberwolfWallPaper />
          </a>
          <ProjectTextContainer>
            <ProjectTextHeader>{t('PROJECT_TIMBERWOLF_PRINT_TITLE')}</ProjectTextHeader>
            <p>
              {t('PROJECT_TIMBERWOLF_PRINT_DESCRIPTION_TEXT')}&nbsp;
              <LinkUnderlined
                href={'https://www.linkedin.com/in/viktor-welander-9b7298156/'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                Viktor Welander
              </LinkUnderlined>
              &nbsp;
              {t('PROJECT_TIMBERWOLF_PRINT_CREDIT_TEXT')}
            </p>
          </ProjectTextContainer>
        </Project>
      </ProjectContainer>
    </>
  );
}
