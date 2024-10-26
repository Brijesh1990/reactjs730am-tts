import React from 'react'
import { Container,Row } from 'react-bootstrap'
export default function Header() {
  return (
     <Container fluid className='shadow p-5 bg-white'> 
     <Row>
        <div className='col-md-4 p-2'>
            <span className='bi bi-phone'></span>
            <b>Call Us : (+91)-998003879</b>
        </div>
        <div className='col-md-4 p-2'>
            <input type='text' placeholder='search anything here ........' className='form-control' />
        </div>
        <div className='col-md-4 p-2'>
            <span className='bi bi-facebook ms-3 fs-4'></span>
            <span className='bi bi-instagram ms-2 fs-4'></span>
            <span className='bi bi-twitter ms-2 fs-4'></span>
            <span className='bi bi-whatsapp ms-2 fs-4'></span>
        </div>
     </Row>
     </Container>
  )
}
