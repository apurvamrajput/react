import React from 'react'

const ChildA = (props) => {
  return (
    <div>ChildA
        <h1>{props.name}----{props.age}</h1>
    </div>
  )
}

export default ChildA