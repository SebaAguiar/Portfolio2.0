import React from 'react'
import { TecnologiesContainer, TecnologiesImage, Title3 } from '../../components/styled-components/styledResumeComponents'
import js from '../../assets/javascript-svgrepo-com.svg'
import nestjs from '../../assets/nestjs-svgrepo-com.svg'
import mongo from '../../assets/mongodb-svgrepo-com.svg'
import postgres from '../../assets/postgresql-svgrepo-com.svg'
import postman from '../../assets/postman-svgrepo-com.svg'
import react from '../../assets/react-svgrepo-com.svg'
import redux from '../../assets/redux-svgrepo-com.svg'
import github from '../../assets/github-svgrepo-com-1.svg'
import git from '../../assets/git-svgrepo-com.svg'
import ts from '../../assets/typescript-svgrepo-com.svg'
import html from '../../assets/html5-svgrepo-com.svg'
import css from '../../assets/css3-svgrepo-com.svg'
import stCompoents from '../../assets/styled-components-svgrepo-com.svg'
import vscode from '../../assets/visualstudiocode-svgrepo-com.svg'
import sublime from '../../assets/sublimetext-svgrepo-com.svg'

const CodingSkills = () => {
  return (
    <>
      <Title3>Coding <span style={{color: "#55B481"}}>Skills</span></Title3>
      <TecnologiesContainer>
        <TecnologiesImage src={js} alt='JavaScript' />
        <TecnologiesImage src={ts} alt='TypeScript' />
        <TecnologiesImage src={mongo} alt='MongoDB' />
        <TecnologiesImage src={postgres} alt='PostgreSQL' />
        <TecnologiesImage src={nestjs} alt='NestJS' />
        <TecnologiesImage src={react} alt='ReactJS' />
        <TecnologiesImage src={redux} alt='ReduxJS' />
        <TecnologiesImage src={stCompoents} alt='Stiled-Components' />
        <TecnologiesImage src={html} alt='HTML5' />
        <TecnologiesImage src={css} alt='CSS3' />
        <TecnologiesImage src={postman} alt='Postman' />
        <TecnologiesImage src={vscode} alt='Visual-Studio code' />
        <TecnologiesImage src={sublime} alt='Sublime-Text' />
        <TecnologiesImage src={github} alt='GitHub' />
        <TecnologiesImage src={git} alt='Git' />
      </TecnologiesContainer>
    </>
  )
}

export default CodingSkills