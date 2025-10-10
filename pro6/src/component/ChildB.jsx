import React from 'react'

const ChildB = (props) => {
  return (
    <div>ChildB

        <h1>{props.employee.enm}---{props.employee.age}---{props.employee.salary}</h1>
    </div>
  )
}

export default ChildB