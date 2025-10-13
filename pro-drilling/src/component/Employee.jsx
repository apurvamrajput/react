import React from 'react'
import empl from './Emp'

function Employee() {
  return (
    <div>Employee Record
        <table >
            {/* thead */}
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>salary</th>
                </tr>
            </thead>
            {/* tbody */}
            <tbody>
            {
             empl.map((ele,index)=>{
                return(
                <tr key={index}>
                    <td>{ele.nm}</td>
                    <td>{ele.age}</td>
                    <td>{ele.sal}</td>
                </tr>
                )
             })  
            }
            </tbody>
        </table>
    </div>
  )
}

export default Employee