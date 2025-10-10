import React from 'react'

import { ChildC } from "./ChildC";

export const ChildB = (props) => {
  return (
    <div>ChildB
        <h1>{props.A}</h1>
        <ChildC B = {props.A}/>
    </div>
  )
}
