import React from 'react'
import ChildB from './ChildB'
function ChildA(props) {
  return (
    <div>ChildA
        <h1>{props.name}</h1> 
        {/* props.name = react  */}
        <ChildB nm = {props.name}/>
    </div>
  )
}

export default ChildA