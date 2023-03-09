import React from 'react'
import { Job, MyName, StyledContainer } from '../../components/styled-components/styledLandingComponents.js'
import './index.css'

const LandingPage = () => {
  return (
    <>
    <StyledContainer>
      <MyName>Sebastian <span style={{color: '#55B481'}}>Aguiar</span></MyName>
      <Job>Full-Stack Web Developer</Job>
    </StyledContainer>
    </>
  )
}

export default LandingPage