import React from 'react'
import ChildC from './ChildC' 
import {name,msg} from '../App'
import { useContext } from 'react'

function ChildB() {
    const n = useContext(name)//name context 
    const m = useContext(msg)// msg context
  return (
    <div>ChildB
        <h1>{n}--{m}</h1>
        <ChildC/>
    </div>
  )
}

export default ChildB