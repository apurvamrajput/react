import React from 'react'
import ChildA from './component/ChildA'
import { createContext } from 'react'

const name = createContext()//context
const msg = createContext()
const city = createContext()


function App() {
  return (
    <div>
      Parent Comp
      <city.Provider value="pune">
      <name.Provider value="react">
        <msg.Provider value="welcome to UI session">
          
          {/* child Comp */}
          <ChildA/>

          </msg.Provider>
      </name.Provider>
      </city.Provider>

      
     
    </div>
  )
}

export default App  //default export
export {name,msg,city}//name export
