import React, { useState } from 'react'
import Counter from './component/Counter'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
const [show,setShow] =  useState(true)
  return (
    <div >
      {/* <Counter/> */}
      <div className='text-center'>
        <button className='btn btn-info' onClick={()=>setShow(!show)}>Comp unmount</button>
        {/* inside the html if we want to write js code at that time we have to use {  }  */}
        {
          //ternary operation 
          // condition ? true exp : false exp
          show ? <Counter/> : <div> component unmounted</div>
        }
      </div>
    </div>
    
  )
}

export default App