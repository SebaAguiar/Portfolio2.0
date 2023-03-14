import React from 'react'
import { ButtonSubmit, ContactContainer, ContactInfo, Form, FormContainer, Input1, Input2, InputsContainer, MessageArea, StyledContactContainer } from '../../components/styled-components/styledContactComponents'
import { useForm, ValidationError } from '@formspree/react';
import { Title3 } from '../../components/styled-components/styledResumeComponents';

const Contact = () => {

  const [state, handleSubmit] = useForm('xeqwgjqd')
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      <StyledContactContainer>
        <ContactContainer>
          <ContactInfo>

          </ContactInfo>          
          <ContactInfo>

          </ContactInfo>          
          <ContactInfo>

          </ContactInfo>
          <ContactInfo>

          </ContactInfo>
        </ContactContainer>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <InputsContainer>
              <Input1
                id="firstName"
                name="firstName"
                placeholder='First Name...'
              />
              <ValidationError 
                prefix="FirstName" 
                field="firstName"
                errors={state.errors}
              />
              <Input1
                id="lastName"
                name="lastName"
                placeholder='Last Name...'
              />
              <ValidationError 
                prefix="LastName" 
                field="firstName"
                errors={state.errors}
              />
            </InputsContainer>
            <InputsContainer>
              <Input1
                id="email"
                type="email"
                name='email'
                placeholder='somebody@email.com'
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <Input1
                id="subject"
                name="subject"
                placeholder='subject...'
              />
              <ValidationError 
                prefix="Subject" 
                field="subject"
                errors={state.errors}
              />
            </InputsContainer>
            <MessageArea
              id="message"
              name="message"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <ButtonSubmit type="submit" disabled={state.submitting}>
            Submit
            </ButtonSubmit>
          </Form>
        </FormContainer>
      </StyledContactContainer>
    </>
  )
}

export default Contact