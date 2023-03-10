import styled, { css } from 'styled-components'


// ? DIVS


export const StyledAboutContainer = styled.div`
   display: flex;
   flex-direction: column;
   height: 100vh;
   width: 70vw;
   background-color: #232323;
`

export const AboutMeContainer = styled.div`
   margin: 0;
   display: flex;
   flex-direction: column;
   width: 70vw;
   height: 50%;
`

export const TextDiv = styled.div`
   display: flex;
   flex-direction: row;
   width: 90%;
`

export const Div1 = styled.div`
   max-width: 50%;
   justify-content: flex-start;
`


// ? H

export const AboutH1 = styled.h1`
   margin-left: 20px;
   font-size: 2em;
   color: #fff;
`


export const WhatIDoH2 = styled.h2`
   margin-left: 20px;
   font-size: 1.5em;
   color: #fff;
`

export const WhatIDoH3 = styled.h3`
   margin-left: 20px;
   font-size: 1em;
   color: #fff;
`


// ? P


export const Information1 = styled.p`
   width: 70%; 
   margin: 10px 40px;
   font-size: 1em;
   flex-direction: column;
   justify-content: space-between;
   color: #fff;
`

export const Information3 = styled.p`
   margin: 0;
   padding: 0;
   width: 90%;
   color: #fff;
`


//? UL LI


export const InfoContainer = styled.ul`
   padding: 0px;
   margin: 0px;
   list-style: none;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   width: 40%;
   flex-wrap: nowrap;
`

export const Information2 = styled.li`
   margin: 0;
   padding: 0;
   display: inline-block;
   color: #fff;
   font-size: 1em;
`


// ? IMG


export const DisplayImage = styled.img`
   margin: 0;
   padding: 0;
   height: 100px;
   width: 100px;
`
