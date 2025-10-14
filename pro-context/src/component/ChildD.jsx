import React from 'react'
import {name,msg} from '../App'
import { useContext } from 'react'
function ChildD() {
    const d = useContext(name)
    const m = useContext(msg)

  return (
    <div>ChildD
        <h1>{d}</h1>
        <h2>{m}</h2>
    </div>
  )
}

export default ChildD