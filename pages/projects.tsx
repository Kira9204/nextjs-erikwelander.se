import React from 'react';
import type { NextPage } from 'next';
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
} from '../components/projects/styles';
import { useRouter } from 'next/router';
import getLang from '../locales/lang';
import { LinkUnderlined } from '../components/globals/styles';

const Projects: NextPage = () => {
  const t = getLang(useRouter());

  return (
    <>
      <InitialContentSpacingStyle />
      <ProjectContainer>
        <Project>
          <a href={'/img/png/obs-screenshot-full.png'} target={'_blank'} rel="noreferrer">
            <ImgObs />
          </a>
          <ProjectTextContainer>
            <ProjectTextHeader>{t.PROJECTS_1_TITLE}</ProjectTextHeader>
            {t.PROJECTS_1_1_TEXT}
            <ul>
              <ProjectListItem>{t.PROJECTS_1_2_TEXT}</ProjectListItem>
              <ProjectListItem>{t.PROJECTS_1_3_TEXT}</ProjectListItem>
              <ProjectListItem>{t.PROJECTS_1_4_TEXT}</ProjectListItem>
            </ul>
            {t.PROJECTS_1_5_TEXT}
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
            <ProjectTextHeader>{t.PROJECTS_2_TITLE}</ProjectTextHeader>
            {t.PROJECTS_2_1_TEXT}&nbsp;
            <a href={'https://www.linkedin.com/in/viktor-welander-9b7298156/'} target={'_blank'} rel={'noreferrer'}>
              <LinkUnderlined>Viktor Welander</LinkUnderlined>
            </a>
            &nbsp;
            {t.PROJECTS_2_2_TEXT}
          </ProjectTextContainer>
        </Project>
      </ProjectContainer>
    </>
  );
};

export default Projects;

//
// Render the page on the server before sending it to the client
//
// This function gets called at build time
export async function getStaticProps() {
  return {
    props: {},
  };
}
