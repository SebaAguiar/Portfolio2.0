import React from 'react'
import { companyStyle } from '../styled-components/styles'

const Experience = (props) => {
   return (
      <>
         <DataContainer>
            <DateContainer>
               <DateText>{props.dateFrom} - {props.dateTo}</DateText>
               <p style={companyStyle}>{props.company}</p>
            </DateContainer>
            <DescriptionContainer>
               <Title2>{props.title}</Title2>
               <Position>{props.position}</Position>
               <PositionDescription>
                  {props.description}
               </PositionDescription>
            </DescriptionContainer>
         </DataContainer>
      </>
   )
}

export default Experience