import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFlag, FaPhone, FaWhatsapp } from 'react-icons/fa'

function TopBar() {
  return (
    
      <div className="top-banner bg-primary text-white py-2">
        <Container>
          <Row className="align-items-center">
            <Col className="col-auto d-flex align-items-center">
              <span>#1 SAUDI RESTAURANT EQUIPMENT SUPPLIER</span>
              <FaFlag className="ms-2" />
            </Col>
            
            <Col className="col-auto d-flex align-items-center justify-content-end">
              <FaWhatsapp className="me-2" />
              <span>+966 135120317</span>
            </Col>
          </Row>
        </Container>
      </div>
    
  )
}

export default TopBar