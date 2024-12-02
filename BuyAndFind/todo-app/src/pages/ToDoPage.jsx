import React, { useEffect, useState } from 'react';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import { fetchTodos, deleteTodo } from '../services/todoService';

export default function ToDoPage(){

    const [todos, setTodoss] = useState([])
 
    // Fetch data when the component mounts directly
//    useEffect(() => {
//        // URL for the online mock JSON data (e.g., JSONPlaceholder)
//        fetch('https://jsonplaceholder.typicode.com/posts')
//        .then((response) => {
//            if (!response.ok) {
//            throw new Error('Network response was not ok');
//            }
//            return response.json();
//        })
//        .then((jsonData) => {
//            setTodoss(jsonData);
//        })
//        .catch((error) => {
//            console.error('Error fetching data:', error);
//        });
//    }, []);   

useEffect(() => {
    const fetch = async () =>{
    const data = await fetchTodos()
        setTodoss(data)
    }
    fetch()
    }, []);


    const handleAddTodo = (title) => {
        const newTodo = {
            id: todos.length ? todos[todos.length - 1].id + 1 : 1, //logic to check values for ID based on how many values of todos are there
            title,
            completed: false
        }
        setTodoss([...todos, newTodo])    
    }

    const handleToggleTodo = (id) => {
        setTodoss(todos.map((todo) =>{
            todo.id === id ? {...todos, completed: !todo.completed} : todo 
        }))
    }

    const handleDeleteTodo = async (id) => {
        await deleteTodo(id);
        setTodoss(todos.filter(todo => todo.id !== (id))); // Remove item by index

    }

    return(
        <div className = "container">
            <h1 className = 'header'> Todo Page</h1>
            <ToDoForm addTodo = {handleAddTodo}/>
            <ToDoList todos = {todos} toggleTodo = {handleToggleTodo} deleteTodo = {handleDeleteTodo}/>
        </div>
    )
}