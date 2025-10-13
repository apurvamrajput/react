import React from 'react'
import ChildA from './component/ChildA'
import ChildB from './component/ChildB'
import ChildC from './component/ChildC'
import ChildD from './component/ChildD'

function App() {
  let obj = {
        pnm:"shiv",
        age:20,
        gender:"Male"
  }
  return (
    <div>Parent
      <ChildA name="aaa"/>
      <ChildB city="pune"/>
      <ChildC comp_nm="TCS"/>
      <ChildD person={obj}/>
    </div>
  )
}

export default App