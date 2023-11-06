import React from 'react'
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit'

export default function Footer() {
  return (
    <div>
      <MDBFooter className='text-center text-white bg-danger'>
        <MDBContainer className='p-4'></MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright:
          <a className='text-white' href='#' style={{ textDecoration: 'none' }}>
            employeemanagementsystem.com
          </a>
        </div>
      </MDBFooter>
    </div>
  )
}