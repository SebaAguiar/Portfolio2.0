import React from 'react'
import screen from '../../assets/screen-svgrepo-com.svg'
import { AboutH1, AboutMeContainer, DisplayImage, Div1, InfoContainer, Information1, Information2, Information3, StyledAboutContainer, TextDiv, WhatIDoH2 } from '../../components/styled-components/styledAboutComponents'
import { DivStyle1, infoStyle1 } from '../../components/styled-components/styles'

const AboutMe = () => {
  return (
    <StyledAboutContainer>
      <AboutMeContainer>
        <AboutH1>ABOUT <span style={{color: "#55B481"}}>ME</span></AboutH1>
        <TextDiv>
          <Information1>
            I am a full-stack web developer with experience in JavaScript, MongoDB using Mongoose, PostgreSQL using Sequelize, Express, Redux, React, HTML, CSS and Bootstrap. I have a strong understanding of these technologies and have worked on multiple projects using them. Currently, I am expanding my skills by learning NestJS. I am passionate about software development and am always eager to learn new technologies and techniques. My goal is to develop high-quality and user-friendly applications that meet the needs of the customers and businesses I work with.
          </Information1>
          <InfoContainer>
              <Information2>Birthday: <span style={{color: "#55B481"}}>15/08/1997</span></Information2>
              <Information2>Residence: <span style={{color: "#55B481"}}>Entre Rios, Argentina</span></Information2>
              <Information2>Email: <span style={{color: "#55B481"}}>sebaaguiar08@gmail.com</span></Information2>
              <Information2>Prone: <span style={{color: "#55B481"}}>+54 3442-536874</span></Information2>
          </InfoContainer>
        </TextDiv>
      </AboutMeContainer>
      <AboutMeContainer>
        <WhatIDoH2>WHAT I <span style={{color: "#55B481"}}>DO</span></WhatIDoH2>
          <TextDiv>
              <Div1 style={{width: '50%', marginLeft: '30px'}}>
                <div style={DivStyle1}>
                  <DisplayImage src={screen} />
                  <Information1 style={infoStyle1}>Back-end <span style={{color: "#55B481"}}>Development</span></Information1>
                </div>
                <Information3>Experiencia Tengo en desarrollo back end por haber trabajado en varios proyectos, incluyendo la creación de sistemas complejos con bases de datos y consultas optimizadas, integración de APIs de terceros y creación de microservicios.</Information3>
              </Div1>
              <Div1 style={{width: '50%', marginLeft: '30px'}}>
                <div style={DivStyle1}>
                  <DisplayImage src={screen} />
                  <Information1 style={infoStyle1}>Web <span style={{color: "#55B481"}}>Development</span></Information1>
                </div>
                <Information3>Experiencia en desarrollo full stack gracias a mi formación en un bootcamp. Con habilidades en frontend y backend, puedo crear soluciones completas y escalables para los problemas de los usuarios.</Information3>
              </Div1>
          </TextDiv>
      </AboutMeContainer>
    </StyledAboutContainer>
  )
}

export default AboutMe