import React from 'react'
import { ChildB } from "./ChildB";

export const ChildA = (props) => {
    let emp = [
        {name:"aa",age:34},
        {name:"bb",age:36},
        {name:"cc",age:32},
        {name:"dd",age:31}
    ]
  return (
    <div>ChildA
        <table>
            <thead>
                <tr>
                    <td>name</td>
                    <td>age</td>
                </tr>
            </thead>
            <tbody>
                {
                emp.map((e,index)=>{
                    return(
                    <tr key={index}>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                    </tr>
                    )
                }

                )
            }
            </tbody>
        </table>
        
        <ChildB A={props.name}></ChildB>

    </div>
  )
}
