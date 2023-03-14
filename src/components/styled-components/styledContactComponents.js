import styled, { css } from 'styled-components'

// ? DIV

export const StyledContactContainer = styled.div`
   display: flex;
   flex-direction: row;
   height: 100vh;
   width: 70vw;
   background-color: #232323;
`

export const ContactContainer = styled.div`
   height: 100vh;
   width: 40%;
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
`

export const ContactInfo = styled.div`
   margin: 0;
   padding: 0;
   height: 20%;
   width: 80%;
   border: 2px solid #d3d3d3;
   border-radius: 5px;
`

export const FormContainer = styled.div`
   margin: 0;
   padding: 0;
   height: 100vh;
   width: 60%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

export const InputsContainer = styled.div`
   width: 100%;
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: row;
`

// ? FORM

export const Form = styled.form`
   height: 80%;
   width: 90%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

// ? INPUT

export const Input1 = styled.input`
   border: 2px solid #bbb;
   background-color: #232323;
   border-radius: 5px;
   color: #fff;
   width: 50%;
   margin: 1%;
   padding: 0;
`
export const Input2 = styled.input`
   border: 2px solid #bbb;
   background-color: #232323;
   border-radius: 5px;
   color: #fff;
   width: 100%;
   margin: 0;
   padding: 0;
`

// ? TEXT AREA

export const MessageArea = styled.textarea`
   border: 2px solid #bbb;
   background-color: #232323;
   border-radius: 5px;
   color: #fff;
   width: 100%;
   margin: 2%;
`

// ? BUTTON

export const ButtonSubmit = styled.button`
   margin: 5%;
   border: 3px solid #d3d3d3;
   border-radius: 25px;
   background-color: #444;
   padding: 5px 40px;
   box-shadow: 4px 4px 0px 1px #232323;
   color: #fff;
   font-weight: bold;

   &:hover {
      transition: all 0.5s ease-in-out;
      background-color: #d3d3d3;
      border-color: #55B481;
      box-shadow: 0px 0px 10px 0px #fff;
      color: #000;
   }

   &:active {
      background-color: #444;
      box-shadow: 0px 0px 10px 0px #55B481;
      color: #fff;
   }
`
