import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
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
  setRequestLocale(locale);
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
            <ProjectTextHeader>{t('PROJECTS_1_TITLE')}</ProjectTextHeader>
            <p>{t('PROJECTS_1_1_TEXT')}</p>
            <ul>
              <ProjectListItem>{t('PROJECTS_1_2_TEXT')}</ProjectListItem>
              <ProjectListItem>{t('PROJECTS_1_3_TEXT')}</ProjectListItem>
              <ProjectListItem>{t('PROJECTS_1_4_TEXT')}</ProjectListItem>
            </ul>
            <p>{t('PROJECTS_1_5_TEXT')}</p>
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
            <ProjectTextHeader>{t('PROJECTS_2_TITLE')}</ProjectTextHeader>
            <p>
              {t('PROJECTS_2_1_TEXT')}&nbsp;
              <LinkUnderlined
                href={'https://www.linkedin.com/in/viktor-welander-9b7298156/'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                Viktor Welander
              </LinkUnderlined>
              &nbsp;
              {t('PROJECTS_2_2_TEXT')}
            </p>
          </ProjectTextContainer>
        </Project>
      </ProjectContainer>
    </>
  );
}
