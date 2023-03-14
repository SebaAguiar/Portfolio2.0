import React from 'react'
import { Job, MyName, StyledContainer } from '../../components/styled-components/styledLandingComponents.js'
import { lastNameStyle } from '../../components/styled-components/styles.js'
import './index.css'

const LandingPage = () => {
  return (
    <>
    <StyledContainer>
      <MyName>Sebastian <span style={lastNameStyle}>Aguiar</span></MyName>
      <Job>Full-Stack Web Developer</Job>
    </StyledContainer>
    </>
  )
}

export default LandingPage