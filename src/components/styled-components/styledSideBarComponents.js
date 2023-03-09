import styled, { css } from 'styled-components'


//?      H


export const MyName2 = styled.h1`
   font-size: 2em;
   margin: 0 auto;
   margin-top: 15%;
   color: #fff;
`

export const Job2 = styled.h3`
   font-size: 1em;
   margin: 0 auto;
   color: #BBB;
`


// ? DIVS


export const StyledSideContainer = styled.div`
      display: flex;
      flex-direction: row;
      heigth: 100vh;
      width: 30vw;
`

export const SideContainer = styled.div`
   flex-position: flex-start;
   display: flex;
   flex-direction: column;
   heigth: 100vh;
   width: 15%;
   background-color: #232323;
   align-content: ;
   justify-content: flex-start;
`

export const MiddleContainer = styled.div`
   flex-position: flex-end;
   display: flex;
   heigth: 100vh;
   width: 85%;
   flex-direction: column;
   align-items: center;
   background-color: #444;
   border-right: 1px solid #d3d3d3;
`

export const Image = styled.div`
   border: 3px solid #fff;
   border-radius: 100%;
   width: 55%;
   padding-top: calc(55% / 1);
   margin-top: 20%;
   background-color: #D9D9D9;
   box-shadow: 5px 1px 70px 5px #232323;

`;

export const SocialDiv = styled.div`
   display: flex;
   heigth: 40px;
   width: 60%;
   margin-top: 40px;
   margin-bottom: 10px;
   justify-content: space-evenly;
`

export const PagesDiv = styled.div`
   height: 100vh;
   width: 15%;
   margin: 0;
   padding: 0;
   background-color: #232323;
   border-right: 1px solid #d3d3d3;
   display: flex;
   flex-direction: column;
   align-content: flex-start;
   flex-grow: 1;
`;

// ? BUTTONS   


export const Button1 = styled.button`
   margin: 80px;
   border: 3px solid #fff;
   border-radius: 25px;
   background-color: #444;
   padding: 5px 40px;
   box-shadow: 4px 4px 0px 1px #232323;

   &:hover {
      transition: all 0.5s ease-in-out;
      background-color: #d3d3d3;
      border-color: #55B481; 
   }

   &:active {
      background-color: #444;
      box-shadow: 0px 0px 0px 0px #232323;
   }
`

export const Button2 = styled.button`
   border: 1px solid #232323;

   &:hover {
      background-color: #444;
   }
`


// ? LIS


export const StyledLi = styled.li`
   width: 100%;
   margin: 0;
   list-style: none;
   border: 1px solid;
   padding: 30% 0%;
   justify-content: center;

   &:hover {
      transition: all 1s ease-in-out;
      background-color: #444;
   }
`


// ? IMG


export const SideImg = styled.img`
   margin: 0; 
   padding: 0; 
   height: 60px; 
   width: 60px; 
   justify-items: center;
   align-items: center;
`


// ? A 


export const SideA = styled.a`
      margin: 0;
      display: flex;
      height: 65px;
      width: 100%;
      justify-content: center;
      align-content: center;
      border-bottom: 2px solid #444;
      
      &:hover {
         transition:  all 0.5s ease-in-out;
         background-color: #444; 
      }

      &:active {
         transition: all 0.5s ease-in-out;
         background-color: #55B481; 
      }
`