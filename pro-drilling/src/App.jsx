import React from 'react'
import ChildA from './component/ChildA'
import Employee from './component/Employee'

function App() {
  return (
    <div>App
      <ChildA name="javascript"/>
      <hr></hr>
      <Employee/>
    </div>
  )
}

export default App