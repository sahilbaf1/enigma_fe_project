import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoList({todos, toggleTodo, deleteTodo}) {
  return (
    <ul className ='todoList'>

    {
      todos.map(todo =>(
        <ToDoItem 
        key = {todo.id}
        todo = {todo}
        toggleTodo= {toggleTodo}
        deleteTodo = {() => deleteTodo(todo.id)}
        />
      )
    )
    }

    </ul>
  )
}
