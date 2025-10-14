import React from 'react'
import ChildB from './ChildB'
import {city} from "../App"
import { useContext } from 'react'

function ChildA() {
    const c = useContext(city)
  return (
    <div>ChildA
        <h1>{c}</h1>
        <ChildB/>
    </div>
  )
}

export default ChildA