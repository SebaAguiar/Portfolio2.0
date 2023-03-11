import React from 'react'
import { CardContainer, CertCard, CertificateContainer, CertImg, CertNameContainer, DateText, PositionDescription, Title3, Title4 } from '../../components/styled-components/styledResumeComponents'

const Certificates = () => {
  return (
    <>
        <CertificateContainer>
            <Title3>My <span style={{color: "#55B481"}}>Certificates</span></Title3>
            <CardContainer>
                <CertCard>
                    <CertImg />
                    <CertNameContainer>
                        <Title4>Certificate</Title4>
                        <DateText style={{fontWeight: 'normal'}}>date</DateText>
                        <DateText style={{fontWeight: 'normal'}}>Empresa Emisora</DateText>
                    </CertNameContainer> 
                </CertCard>
                
            </CardContainer>
        </CertificateContainer>
    </>
  )
}

export default Certificates