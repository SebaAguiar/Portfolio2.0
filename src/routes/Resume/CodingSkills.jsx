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

  const tec = [js, ts, mongo, postgres, nestjs, react, redux, stCompoents, html, css, postman, vscode, sublime, github, git]

  return (
    <>
      <Title3>Coding <span style={{color: "#55B481"}}>Skills</span></Title3>
      <TecnologiesContainer>
          {
            tec.map(e => (
              <TecnologiesImage src={e} alt={e} />
            ))
          }
      </TecnologiesContainer>
    </>
  )
}

export default CodingSkills