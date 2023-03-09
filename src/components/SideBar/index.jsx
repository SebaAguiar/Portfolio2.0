import React from 'react'
import { Button1, Image, Job2, MiddleContainer, MyName2, PagesDiv, SideA, SideImg, SocialDiv, StyledSideContainer } from '../styled-components/styledSideBarComponents'
import './index..css'
import github from '../../assets/github-svgrepo-com.svg'
import linkedin from '../../assets/linkedin-svgrepo-com.svg'
import telegram from '../../assets/telegram-svgrepo-com.svg'
import whatsapp from '../../assets/whatsapp-svgrepo-com.svg'
import home from '../../assets/home-1-svgrepo-com.svg'
import about from '../../assets/user-1-svgrepo-com.svg'
import education from '../../assets/list-right-svgrepo-com.svg'
import experience from '../../assets/suitcase-svgrepo-com.svg'
import contact from '../../assets/mail-svgrepo-com.svg'
import { DownloadCVStyles, aSideStyle, imageStyle } from '../styled-components/styles'

const SideBar = () => {
  return (
    <>
      <StyledSideContainer>
        <PagesDiv>
          <SideA href='/' style={aSideStyle}>
            <SideImg src={home} alt='home' />
          </SideA>
          <SideA href='/about' style={aSideStyle}>
            <SideImg src={about} style={imageStyle} alt='about' />
          </SideA>
          <SideA href='/resume' style={aSideStyle}>
            <SideImg src={education} alt='education' />
          </SideA>
          <SideA href='/experience' style={aSideStyle}>
            <SideImg src={experience} alt='experience' />
          </SideA>
          <SideA href='/contact' style={aSideStyle}>
            <SideImg src={contact} alt='contact' />
          </SideA>
        </PagesDiv>
        <MiddleContainer>
          <Image></Image>
          <MyName2>Sebastian Aguiar</MyName2>
          <Job2>Full Stack Web Developer</Job2>
          <SocialDiv>
            <a href='https://github.com/SebaAguiar'>
              <img src={github} style={{height: '30px', width: '30px'}} alt='github' /> 
            </a>
            <a href='https://www.linkedin.com/in/sebastian-aguiar-a91662218/'>
              <img src={linkedin} style={{height: '30px', width: '30px'}} alt='linkedin' /> 
            </a>
            <a>
              <img src={telegram} style={{height: '30px', width: '30px'}} alt='telegram' /> 
            </a>
            <a href='https://wa.me/3442536874'>
              <img src={whatsapp} style={{height: '30px', width: '30px'}} alt='whatsapp' /> 
            </a>
          </SocialDiv>
          <Button1><span style={DownloadCVStyles}>Download CV</span></Button1>
        </MiddleContainer>
      </StyledSideContainer>
    </>
  )
}

export default SideBar