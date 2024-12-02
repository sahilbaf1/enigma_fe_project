import React, { useState } from 'react'

export default function Register() {

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")

  return (
    <div>
      <form action="">
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
         <input 
            type="password" 
            placeholder = "Confirm Password"
            value = {confirmPassword}
            onChange ={(e) => setConfirmPassword(e.target.value)}
            className = "auth_input"
            required
        />
        <button type ='submit' className = 'auth_button'> Login </button>
      </form>
      Register
    </div>
  )
}
