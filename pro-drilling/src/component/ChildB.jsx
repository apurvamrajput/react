import React from 'react'
import ChildC from './ChildC'

function ChildB(props) {
  return (
    <div>ChildB
        <h1>{props.nm}</h1>
        <ChildC />
    </div>
  )
}

export default ChildB