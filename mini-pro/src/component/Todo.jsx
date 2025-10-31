import React, { useState } from 'react'

function Todo() {
    const [input,setInput]= useState("")
    const [todo,setTodo] = useState([])
    const [edit,setEdit] = useState(null)

    // abc@123 
     const AddItem=()=>{
        if(input.trim() === ''){
            alert("Add vaild data!!")
        }
        else if(edit !== null){
            //existing record update
            const uptodo = [...todo]//copy of existing arr
            uptodo[edit] = input //arr[2] = xyz
            setTodo(uptodo)
            setInput("")//input empty 
            setEdit(null)//covert update button into add
        }
        else{
            setTodo([...todo,input])
            setInput("")
        }
    }
    const deleteItem = (index)=>{
        // const delitem = [...todo]//temp store in var
        // delitem.splice(index,1)
        // setTodo(delitem)

        //other way
        setTodo(todo.filter((a,i) => i !== index))


        
    }
       
   const editItem = (index)=>{
        //todo[1] -->aaa
        setInput(todo[index])//input field store 
        setEdit(index)  //remember which item is being edit

        //other way
        // deleteItem(index)//previous record del
   }


  return (
    <div className='bg-secondary w-50 mx-auto mt-5 rounded-4 p-5'>
        <h1 className='text-warning text-center'>Todo List</h1>
        <input type='text' className='form-control w-75 mx-auto'
        value = {input}
        onChange={(e)=>setInput(e.target.value)}
        ></input>
        <div className='text-center mt-4'>
        <button className='btn btn-success' onClick={AddItem}>
            {/* changable button using ternary op */}
            {edit !== null ? "Update" : "Add"}
        </button>
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
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item}</td>
                                <td>
                                    <button className='btn btn-warning me-3'
                                    onClick={()=>editItem(index)}>Edit</button>
                                    <button className='btn btn-danger'
                                    onClick={()=>deleteItem(index)}>Delete</button>
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