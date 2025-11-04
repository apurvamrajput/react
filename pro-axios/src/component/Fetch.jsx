import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function Fetch() {
    const [user,setUser] = useState([])
     async function fetchdata(){
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      console.log(response.data)
      setUser(response.data)
    
    }
    useEffect(()=>{
        fetchdata()
    },[])

    
  return (
    <div>Fetch</div>
  )
}

export default Fetch