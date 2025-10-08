// function App(){
//   return(
//     <>
//     <h1>This is my functional component</h1>
//     </>
//   )
// }
// //export default file_nm/fun_nm

// export default App;

import { Component } from "react";
import "./style.css"
//class base component
class App extends Component{
  obj = {color:"red",backgroundColor:"yellow"}
  render(){
    return(
      <>
      <h1 >This is my class base component</h1>
      </>
    )
  }
}

export default App;


