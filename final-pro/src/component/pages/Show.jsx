import React, {  useEffect, useMemo, useState } from 'react'
import {NavLink} from "react-router-dom"
import axios from "axios"

function Show() {
    const [student,setStudent] = useState([])
    const [search,setSearch] = useState("")
    const [error,setError] = useState("")
    
    const showData= async()=>{
        try{
            const response = await axios.get("http://localhost:5000/student")
            console.log(response)//return promise object
            console.log(response.data)
            setStudent(response.data)
        }
        catch(error){
            if (error.response){
                setError(`Error:${error.response.status} -${error.response.statusText}`)
            }
           

        }
    }

    useEffect(()=>{
        showData()
    },[])

    const searchData = useMemo(()=>{
        return student.filter((stu)=>{
        return stu.course.toLowerCase().includes(search.toLowerCase()) ||
        stu.city.toLowerCase().includes(search.toLowerCase())
    })
    },[student,search])

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Student Record</h1>
        <div className='w-50 mx-auto mt-2 mb-3'>
            <input type="text" className='form-control'
            placeholder='Enter Course Name'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}/>  
            {/* {search}  input value */}
        </div>

        {
            error && 
            <p className='text-danger text-center '>{error}</p>
        }
        
       
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
                    <th>address</th>
                    <th>course</th>
                    <th>mail</th>
                    <th>Action</th>
                </tr>

            </thead>
            <tbody>
                {
                    searchData.map((stu,index)=>{
                        return(
                            <tr key={index}>
                                <td>{stu.id}</td>
                                <td>{stu.fname}</td>
                                <td>{stu.lname}</td>
                                <td>{stu.gender}</td>
                                <td>{stu.city}</td>
                                <td>{stu.state}</td>
                                <td>{stu.dob}</td>
                                <td>{stu.pincode}</td>
                                <td>{stu.address}</td>
                                <td>{stu.course}</td>
                                <td>{stu.email}</td>
                                <td>
                                    <NavLink to={`/update/${stu.id}`}><button className='btn btn-success'>Edit</button></NavLink>
                                    <NavLink to={""}><button className='btn btn-danger'>Del</button></NavLink>
                                </td>
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

