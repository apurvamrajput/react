import React, { useEffect, useState } from 'react'
import axios from "axios"

function Show() {
    const [student,setStudent] = useState([])
    const showData= async()=>{
            const response = await axios.get("http://localhost:5000/student")
            console.log(response)//return promise object
             console.log(response.data)
            setStudent(response.data)
    }

    useEffect(()=>{
        showData()
    },[])
  return (
    <div>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Sr no.</th>
                    <th>first name</th>
                    <th>Last name</th>
                    <th>Gender</th>
                    <th>city</th>
                    <th>State</th>
                    <th>DOB</th>
                    <th>Pincode</th>
                    <th>course</th>
                    <th>mail</th>
                </tr>

            </thead>
            <tbody>
                {
                    student.map((stu,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{stu.fname}</td>
                                <td>{stu.lname}</td>
                                <td>{stu.gender}</td>
                                <td>{stu.city}</td>
                                <td>{stu.state}</td>
                                <td>{stu.dob}</td>
                                <td>{stu.pincode}</td>
                                <td>{stu.course}</td>
                                <td>{stu.email}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    </div>
  )
}

export default Show