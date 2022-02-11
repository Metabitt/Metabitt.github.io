import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: +51 991-690-288">+51 991-690-288</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:angelipanake@gmail.com">angelipanake@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Location</LinkTitle>
          <LinkItem href="Lima-Perú">Lima - Perú or <br/>remote work</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>Make the best decisions using your data.</Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
          <SocialIcons href='https://github.com/Metabitt/' >
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://pe.linkedin.com/in/ipanakeangel/' >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/metabiit/' >
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialIconsContainer>
      </SocialContainer>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height:'10vh'}}>© 2022 Angel Ipanaque</div>
    </FooterWrapper>
  );
};

export default Footer;
