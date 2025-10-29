import React, { useState } from 'react'

function Todo() {
    const [input,setInput]= useState("")
    const [todo,setTodo] = useState([])

     const AddItem=()=>{
            setTodo([...todo,input])
    }

  return (
    <div className='bg-secondary w-50 mx-auto mt-5 rounded-4 p-5'>
        <h1 className='text-warning text-center'>Todo List</h1>
        <input type='text' className='form-control w-75 mx-auto'
        value = {input}
        onChange={(e)=>setInput(e.target.value)}
        ></input>
        <div className='text-center mt-4'>
        <button className='btn btn-success' onClick={AddItem}>Add</button>
        </div>
        <table className='table table-dark mt-3'>
            <thead>
                <tr>
                    <th>Sr. no</th>
                    <th>Item</th>
                    <th>Action</th>
                </tr>

            </thead>
            <tbody>
                {
                    todo.map((item,index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{item}</td>
                                <td>
                                    <button className='btn btn-warning'>Update</button>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }


            </tbody>
        </table>
    </div>
  )
}

export default Todo