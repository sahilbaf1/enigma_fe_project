import React, { useState } from 'react'
import { useDispatch,  } from 'react-redux';
import { authUser } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const handleSubmit = async (e) => {
      e.preventDefault();
      setEmail("")
      setPassword("")

      try {
        const response = await dispatch(
          authUser({Email: email, Password: password})
        ).unwrap();

        if (response.status.code === 200) {
          navigate('/products')
        } else {
          console.error('Login failed:', response.description);
          alert('Login gagal. Silakan periksa email dan password Anda.');
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('Terjadi kesalahan saat login. Silakan coba lagi.');
      }
    }

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form id='login-form' action="" onSubmit={handleSubmit}>
        <div className='input-group'>
        <input 
        id='email'
            type="email" 
            placeholder = "Email"
            value = {email}
            onChange ={(e) => setEmail(e.target.value)}
            className = "auth_input"
            required
        />
        </div>
        <div className='input-group'>
        <input 
            type="password" 
            placeholder = "Password"
            value = {password}
            onChange ={(e) => setPassword(e.target.value)}
            className = "auth_input"
            required
        />
        </div>
        <button type ='submit' className = 'login-btn'> Login </button>
      </form>
    </div>
  )
}
