import React from 'react'
import ChildA from './component/ChildA'
import ChildB from './component/ChildB'
import ChildC from './component/ChildC'

const App = () => {
    let emp = {enm:"xyz",age:34,salary:40000}
    let ar = [10,20,30,40]
  return (
    <div>App
        <ChildA name="abcd" age="23"/>
        <ChildB employee={emp}/>
        <ChildC arr = {ar}/>
    </div>
  )
}

export default App