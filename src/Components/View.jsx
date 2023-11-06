import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function View() {

  const { id } = useParams()
  console.log(id);
  const [anEmployee, setAnEmployee] = useState()


  const fetchEmployee = async () => {
    const response = await axios.get('http://localhost:8000/getAnEmployee/' + id)
    console.log(response.data.employee);//particular employee details
    setAnEmployee(response.data.employee)

  }
  console.log(anEmployee);//particular employee details

  useEffect(() => {
    fetchEmployee()
  }, [])

  return (
    <div>
      <div className="container">
        {
          
          <MDBCard className='m-5'>
            <MDBCardBody>
              <MDBCardText>
                <MDBListGroup style={{ minWidth: '22rem' }} light>
                  <h3 className='text-center p-3'>Employee Details</h3>
                  <MDBListGroupItem active noBorders aria-current='true' className='px-3'>
                    Name : {anEmployee?.name}
                  </MDBListGroupItem>
                  <MDBListGroupItem className='px-3'>
                    Age : {anEmployee?.age}
                  </MDBListGroupItem>
                  <MDBListGroupItem noBorders className='px-3'>
                    Designation : {anEmployee?.designation}
                  </MDBListGroupItem>
                  <MDBListGroupItem noBorders className='px-3'>
                    Salary : {anEmployee?.salary}
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardText>
              <div className='text-center'>
              <Link to={'/'}>
                <MDBBtn href='#'>Back to home</MDBBtn>
              </Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        }
      </div>
    </div>

  )

}

export default View