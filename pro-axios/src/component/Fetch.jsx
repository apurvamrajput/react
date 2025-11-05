import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function Fetch() {
    const [user,setUser] = useState([])
     async function fetchdata(){
      const response = await axios.get("  http://localhost:8000/student")
      console.log(response.data)
      setUser(response.data)
    
    }
    useEffect(()=>{
        fetchdata()
    },[])

    
  return (
    <div>
      <h1>User Record</h1>
      <table className='table table-secondary'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Mail Id</th>
          </tr>
        </thead>

        <tbody>
          {
            user.map((ele,index)=>{
                return(
                  <tr key={index}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.username}</td>
                    <td>{ele.email}</td>
                  </tr>
                )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Fetch