import React from 'react';
import type { NextPage } from 'next';
import {
  ContactItemsStyle,
  ContactItemsSpacingStyle,
  InitialContentSpacingStyle,
  ProfileContainerStyle,
  ProfilePictureStyle,
  ProfilePictureNameStyle,
  ProfilePictureOccupationStyle,
  ProfilePictureQuoteStyle,
  IntroductionStyle,
  IntroductionFirstWordStyle,
} from '../components/home/styles';
import { ContactItem } from '../components/home/components';
import { useRouter } from 'next/router';
import getLang from '../locales/lang';

const Home: NextPage = () => {
  const router = useRouter();
  const t = getLang(router);
  const l = router.locale || 'en';

  return (
    <>
      <InitialContentSpacingStyle />
      <ProfileContainerStyle>
        <ProfilePictureStyle />
        <ProfilePictureNameStyle>
          Erik
          <br />
          Welander
        </ProfilePictureNameStyle>
        <ProfilePictureOccupationStyle>
          {t.OCCUPATION_1}
          <br />
          {t.OCCUPATION_2}
        </ProfilePictureOccupationStyle>
        <ProfilePictureQuoteStyle>{t.PERSONAL_QUOTE}</ProfilePictureQuoteStyle>
      </ProfileContainerStyle>
      <ContactItemsSpacingStyle />
      <ContactItemsStyle>
        <ContactItem href={'https://discordapp.com/users/165204009303539712'} img={'/img/png/discord.png'}>
          Discord
          <br />
          kira#0005
        </ContactItem>
        <ContactItem href={'tel:+46737471410'} img={'/img/png/phone.png'}>
          {t.PHONE_NUMBER}
        </ContactItem>
        <ContactItem href={'https://chat.google.com/'} img={'/img/png/google-chat.png'}>
          Google Chat
          <br />
          erik.welander25@gmail.com
        </ContactItem>
        <ContactItem href={'https://www.facebook.com/erik.welander'} img={'/img/png/facebook.png'}>
          Facebook
        </ContactItem>
        <ContactItem href={'https://github.com/Kira9204'} img={'/img/png/github.png'}>
          Github
        </ContactItem>
        <ContactItem href={'https://www.linkedin.com/in/erikwelander/'} img={'/img/png/linkedin.png'}>
          Linkedin
        </ContactItem>
        <ContactItem href={'mailto:erik.welander@hotmail.com'} img={'/img/png/outlook.png'}>
          Outlook
          <br />
          erik.welander@hotmail.com
        </ContactItem>
        <ContactItem href={'https://twitter.com/kira9204'} img={'/img/png/twitter.png'}>
          Twitter
        </ContactItem>
      </ContactItemsStyle>
      <IntroductionStyle>
        <IntroductionFirstWordStyle>{t.HI}</IntroductionFirstWordStyle>
        <p>{t.INDEX_INTRODUCTION_1}</p>
        {t.INDEX_INTRODUCTION_2}
        <ul>
          <li>{t.INDEX_INTRODUCTION_LIST_ITEM_1}</li>
          <li>{t.INDEX_INTRODUCTION_LIST_ITEM_2}</li>
          <li>{t.INDEX_INTRODUCTION_LIST_ITEM_3}</li>
          <li>{t.INDEX_INTRODUCTION_LIST_ITEM_4}</li>
          <li>{t.INDEX_INTRODUCTION_LIST_ITEM_5}</li>
          <li>{t.INDEX_INTRODUCTION_LIST_ITEM_6}</li>
        </ul>
        <p>
          {t.INDEX_INTRODUCTION_CONTACT_ME_1}
          <br />
          {t.INDEX_INTRODUCTION_CONTACT_ME_2_1}&nbsp;<strong>{t.PROFESSIONAL}</strong>&nbsp;
          {t.INDEX_INTRODUCTION_CONTACT_ME_2_2}
        </p>
        <p>
          <i>Kira Kira</i>
        </p>
      </IntroductionStyle>
    </>
  );
};

export default Home;

//
// Render the page on the server before sending it to the client
//
// This function gets called at build time
export async function getStaticProps() {
  return {
    props: {},
  };
}
