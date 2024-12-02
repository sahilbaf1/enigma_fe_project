import React, { useState } from 'react'

export default function ToDoForm({addTodo}) {

const[newTodo, setNewTodo] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()){
        addTodo(newTodo)
    }
    setNewTodo("")
}

  return (
    <form className = 'form' onSubmit={(handleSubmit)}>
    <div>
      <input 
            type="text" 
            value={newTodo}
            onChange = {(e) => setNewTodo(e.target.value)}
            placeholder = 'Write new Todo task'
            className = 'input'
     />
      <button className = 'button' type = "submit">Add</button>
    </div>
    </form>
  )
}
