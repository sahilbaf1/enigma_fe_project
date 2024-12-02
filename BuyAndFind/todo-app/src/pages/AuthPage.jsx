import React, { useEffect } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

export default function AuthPage() {

    const [isLoginView, setIsLoginView] = useState(true)

    useEffect 

  return (
    <div className = 'auth_container'>
      {isLoginView ? (
        <Login/>
      ):(
        <Register/>
      )}
    </div>
  )
}
