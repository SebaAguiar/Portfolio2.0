import styled, { css } from 'styled-components'


// ? DIVS 

export const StyledResumeContainer = styled.div`
   display: flex;
   flex-direction: column;
   height: 100vh;
   width: 70vw;
   align-items: flex-start;
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
    position: relative;
    top: 0;
    left: 25.1%;
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

export const TecnologiesContainer = styled.div`
   margin: 3%;
   padding: 0;
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   flex-wrap: wrap;
`

export const CertificateContainer = styled.div`
   margin: 0;
   padding: 0;
   width: 90%;
   display: flex;
   flex-direction: column;
`

export const CardContainer = styled.div`
   margin: 0;
   padding: 0;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
`

export const CertCard = styled.div`
   margin: 20px;
   padding: 0;
   width: 60%;
   height: 140px;
   border: 1px solid #d3d3d3;
   border-radius: 20px;
   display: flex; 
   /* height: 60px; */
   background-color: #444;
`

export const CertNameContainer = styled.div`
   margin: 1% 0 0 2%;
   width: 100%;
   padding: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
` 

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

export const Title4 = styled.h4`
   font-size: 1.2em;
   font-weight: bold;
   margin: 0;
   padding: 0;
   color: #fff;
`




// ? P


export const DateText = styled.p`
   margin: 0;
   padding: 0;
   font-size: 1em;
   font-weight: bold;
   color: #fff;
`

export const Position = styled.p`
   margin: 0;
   padding: 0;
   font-size: 1em;
   font-weight: bold;
   color: #fff;
`

export const PositionDescription = styled.p`
   margin: 0;
   padding: 0;
   font-size: 1em;
   color: #fff;
`

// ? IMG

export const TecnologiesImage = styled.img`
   margin: 2% 1%;
   padding: 0;
   height: 70px;
   width: 70px;
`

export const CertImg = styled.img`
   margin: 0;
   padding: 0;
   height: 100%;
   width: 40%;
   border-right: 1px solid #d3d3d3;
   border-radius: 20px 0 0 20px;
   background-color: #fff;
`
