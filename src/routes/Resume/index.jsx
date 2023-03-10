import React from 'react'
import { ResumeH1, StyledResumeContainer } from '../../components/styled-components/styledResumeComponents'
import WorkExperience from './WorkExperience'
import StudiesFormation from './Studies-Formation'
import CodingSkills from './CodingSkills'
import Certificates from './Certificates'

const Resume = () => {
  return (
    <>
      <StyledResumeContainer>
        <ResumeH1>RESU<span style={{color: "#55B481"}}>ME</span></ResumeH1>
        <WorkExperience />
        <StudiesFormation />
        <CodingSkills />
        <Certificates /> 
      </StyledResumeContainer>
    </>
  )
}

export default Resume
