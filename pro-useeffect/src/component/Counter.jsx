import React, { useEffect, useState } from 'react'

function Counter() {
     const [count,SetCount]= useState(0)
     const inc = () =>{
            SetCount(count+1)
     }

     const dec = () =>{
            SetCount(count-1)
     }
     useEffect(()=>{
        console.log("comp mount")
     },[])

     useEffect(()=>{
        console.log("comp update")
     },[count == 5])

  return (
    <div className='bg-dark text-light w-50 mx-auto p-3'>
        <h1 className="text-center">Counter Application</h1>
        <div className=' text-center '>
            <button className='btn btn-success' onClick={inc}>+</button>
            <button className='btn btn-secondary'>{count}</button>
            <button className='btn btn-danger' onClick={dec}>-</button>
        </div>
    </div>
  )
}

export default Counter