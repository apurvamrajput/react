import React from 'react'
import ChildD from './ChildD'
import { useContext } from 'react'
import {name} from '../App'

function ChildC() {
    const nm = useContext(name)
  return (
    <div>ChildC
        <h1>{nm}</h1>
        <ChildD/>
    </div>
  )
}

export default ChildC