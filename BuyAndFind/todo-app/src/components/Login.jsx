import axios from 'axios';
import React, { useState } from 'react'

export default function Login() {

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("masuk");
      
      setEmail("")
      setPassword("")
      try {
        const response = await axios.post(
          "url/login", { Email: email, Password: password}
        );
        const fetchData = response.data;
      } catch (error){
        console.error("Error posting data");
      }

    }


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input 
            type="email" 
            placeholder = "Email"
            value = {email}
            onChange ={(e) => setEmail(e.target.value)}
            className = "auth_input"
            required
        />
        <input 
            type="password" 
            placeholder = "Password"
            value = {password}
            onChange ={(e) => setPassword(e.target.value)}
            className = "auth_input"
            required
        />
        <button type ='submit' className = 'auth_button'> Login </button>
      </form>
    </div>
  )
}
