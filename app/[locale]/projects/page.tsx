import React from 'react';
import { getTranslations } from 'next-intl/server';
import {
  InitialContentSpacingStyle,
  Project,
  ProjectContainer,
  ProjectTextContainer,
  ProjectTextHeader,
  ImgObs,
  ImgTimberwolf,
  ImgTimberwolfWallPaper,
} from '../../../components/projects/styles';
import { MarkdownText } from '../../../components/globals/markdown-text';

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
            <MarkdownText>{t.raw('PROJECT_STREAMING_SETUP_TEXT')}</MarkdownText>
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
            <MarkdownText>{t.raw('PROJECT_TIMBERWOLF_PRINT_TEXT')}</MarkdownText>
          </ProjectTextContainer>
        </Project>
      </ProjectContainer>
    </>
  );
}
