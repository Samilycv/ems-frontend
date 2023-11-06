import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'

function Admin() {
  const [allEmployees, setAllEmployees] = useState([])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8000/getEmployees')
    console.log(response.data.employee);//array of data
    setAllEmployees(response.data.employee)
  }
  console.log(allEmployees);//array of data

  const deleteEmp=async(id)=>{
    const response=await axios.delete('http://localhost:8000/deleteEmployee/'+id)
    console.log(response);
    alert(response.data.message)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='container'>
        <h3 className='text-center m-3'>Employee Management System</h3>
        <p style={{ textAlign: 'justify' }}>
          Employee management that uses coaching to motivate and build trust with workers can unlock enormous human potential. Yet, communication tactics alone may fall short in the face of multi-generational workforces, rising numbers of freelance workers and complex regulations. Technology, whether it’s workforce management software or a human capital management solution, can often help business leaders maintain productivity more effectively in rapidly changing environments.
        </p>
        <Link to={'/add'}> {/* redirected to home page */}
          <button className='btn btn-danger my-5'><i className='fa-solid fa-user-plus'></i>Add</button>
        </Link>
        <div className='table'>
          <MDBTable small>
            <MDBTableHead>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>Name</th>
                <th scope='col'>Age</th>
                <th scope='col'>Designation</th>
                <th scope='col'>Salary</th>
                <th scope='col'>Actions</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {
                allEmployees.map(item => (
                  <tr>
                    <th scope='row'>{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.designation}</td>
                    <td>{item.salary}</td>
                    <td>
                      <div className='d-flex justify-content-around'>
                        <Link to={'edit/'+item.id}>
                        <button className='btn'>
                          <i className='fa-solid fa-pen text-success'></i>
                        </button>
                        </Link>

                        <Link to={'view/'+item.id}>
                        <button className='btn'>
                          <i className='fa-solid fa-eye text-primary'></i>
                        </button>
                        </Link>
                       
                        <button onClick={()=>deleteEmp(item.id)} className='btn'>
                          <i className='fa-solid fa-trash text-danger'></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))

              }
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </>
  )
}

export default Admin