import styled, { css } from 'styled-components'


export const MyName = styled.h1`
   color: #fff;
   justify-content: center;
   margin: 0;
   @media (min-width: 480px) {
      font-size: 2em; 
   }

   @media (min-width: 768px) {
      font-size: 3em;
   }

   @media (min-width: 1024px){
      font-size: 5em;
   }
`

export const Job = styled.h3`
   font-size: 35px;
   margin: 0;
   color: #BBB;
`

export const StyledContainer = styled.div`
   display: flex;
   flex-direction: column;
   heigth: 100vh;
   width: 70vw;
   justify-content: center;
   align-items: center;
   background-color: #232323;
`