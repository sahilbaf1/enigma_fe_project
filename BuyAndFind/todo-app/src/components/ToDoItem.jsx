import React from 'react'

export default function ToDoItem({todo, toggleTodo, deleteTodo}) {
  return (
    <li className = 'todoItem'>
        <span 
            className = {` todoText ${todo.completed}` ? ' completed' : ''}
            onClick={() => toggleTodo(todo.id) }
        >

        <p> {todo.id} </p>  
        <p> {todo.title} </p>
            

                
        </span>
        <button className = 'button' onClick = {deleteTodo} >delete</button>
    </li>


    
  )
}
