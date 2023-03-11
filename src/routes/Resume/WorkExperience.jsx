import React from 'react'
import { DataContainer, DateContainer, DateText, DescriptionContainer, Position, PositionDescription, Title1, Title2 } from '../../components/styled-components/styledResumeComponents'
import { companyStyle } from '../../components/styled-components/styles'


const WorkExperience = () => {
  return (
    <>
    <Title1>Work <span style={{color: "#55B481"}}>Experience</span></Title1>
        <DataContainer>
          <DateContainer>
            <DateText>Date - Date</DateText>
            <p style={companyStyle}>Company</p>
          </DateContainer>
          <DescriptionContainer>
            <Title2>Este es el titulo</Title2>
            <Position>Position</Position>
            <PositionDescription>
            Lorem ipsum dolor sit amet consectetur. Volutpat commodo quisque dolor integer tristique augue. Cursus sit id elit eget sed elementum et semper urna. Enim ullamcorper dolor nunc dignissim et massa. Dolor duis consequat tellus accumsan libero egestas sagittis sed tempor.
            </PositionDescription>
          </DescriptionContainer>
        </DataContainer>
        <DataContainer>
          <DateContainer>
            <DateText>Date - Date</DateText>
            <p style={companyStyle}>Company</p>
          </DateContainer>
          <DescriptionContainer>
            <Title2>Este es el titulo</Title2>
            <Position>Position</Position>
            <PositionDescription>
            Lorem ipsum dolor sit amet consectetur. Volutpat commodo quisque dolor integer tristique augue. Cursus sit id elit eget sed elementum et semper urna. Enim ullamcorper dolor nunc dignissim et massa. Dolor duis consequat tellus accumsan libero egestas sagittis sed tempor.
            </PositionDescription>
          </DescriptionContainer>
        </DataContainer>
        <DataContainer>
          <DateContainer>
            <DateText>Date - Date</DateText>
            <p style={companyStyle}>Company</p>
          </DateContainer>
          <DescriptionContainer>
            <Title2>Este es el titulo</Title2>
            <Position>Position</Position>
            <PositionDescription>
            Lorem ipsum dolor sit amet consectetur. Volutpat commodo quisque dolor integer tristique augue. Cursus sit id elit eget sed elementum et semper urna. Enim ullamcorper dolor nunc dignissim et massa. Dolor duis consequat tellus accumsan libero egestas sagittis sed tempor.
            </PositionDescription>
          </DescriptionContainer>
        </DataContainer>
        <DataContainer>
          <DateContainer>
            <DateText>Date - Date</DateText>
            <p style={companyStyle}>Company</p>
          </DateContainer>
          <DescriptionContainer>
            <Title2>Este es el titulo</Title2>
            <Position>Position</Position>
            <PositionDescription>
            Lorem ipsum dolor sit amet consectetur. Volutpat commodo quisque dolor integer tristique augue. Cursus sit id elit eget sed elementum et semper urna. Enim ullamcorper dolor nunc dignissim et massa. Dolor duis consequat tellus accumsan libero egestas sagittis sed tempor.
            </PositionDescription>
          </DescriptionContainer>
        </DataContainer>
    </>
  )
}

export default WorkExperience