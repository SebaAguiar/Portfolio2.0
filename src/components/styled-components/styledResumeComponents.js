import styled, { css } from 'styled-components'


// ? DIVS 

export const StyledResumeContainer = styled.div`
   display: flex;
   flex-direction: column;
   height: 100vh;
   width: 70vw;
   overflow: scroll;
   background-color: #232323;
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  position: relative;
  margin: 20px;

  &:first-child {
    margin-top: 20px;
    padding-top: 20px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 25%;
    height: 121%;
    width: 2px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px #55B481;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0%;
    left: 24.6%;
    height: 10px;
    width: 10px;
    background-color: #fff;
    border-radius: 50%;
    transform: translateY(-50%);
    box-shadow: 0px 0px 15px 0px #55B481;

  }
`


export const DescriptionContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 70%;
   margin-left: 20px;
   position: relative;
   padding-left: 20px;
`

export const DateContainer = styled.div`
   display: flex;
   margin-left: 30px;
   flex-direction: column;
   width: 30%;
   
`
// export const DescriptionContainer = styled.div`
//    display: flex;
//    flex-direction: column;
//    width: 70%;
//    padding-left: 20px;
//    border-left: 2px solid #55B481;
// `

// ? H

export const ResumeH1 = styled.h1`
   margin-left: 20px;
   font-size: 2em;
   color: #fff;
`

export const Title1 = styled.h1`
   margin: 0;
   padding: 0;
   margin-left: 50px;
   font-size: 1.5em;
   color: #fff;
`

export const Title2 = styled.h1`
   margin: 0;
   padding: 0;
   font-size: 2em;
   color: #fff;
`

export const Title3 = styled.h1`
   margin: 0;
   padding: 0;
   margin-top: 50px;
   margin-left: 50px;
   font-size: 1.5em;
   color: #fff;
`




// ? P


export const DateText = styled.p`
   margin: 0;
   paddin: 0;
   font-size: 1em;
   font-weight: bold;
   color: #fff;
`

export const Position = styled.p`
   margin: 0;
   padding: 0;
   font-size: 1em;
   font-weigth: bold;
   color: #fff;
`

export const PositionDescription = styled.p`
   margin: 0;
   paddin: 0;
   font-size: 1em;
   color: #fff;
`
