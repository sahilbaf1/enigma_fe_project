import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import TodoPage from './pages/ToDoPage.jsx'
import CountPage from './pages/CountPage.jsx'
import Login from './pages/Login.jsx'
import Register from './components/Register.jsx'
import LoginPage from './pages/Login.jsx'
import Explore from './pages/Explore.jsx'



const router = createBrowserRouter([
  {
    path : '/', 
    element : <App />,
    errorElement : <NotFound/>,
    children : [
      {
        path : '/to_do',
        element: <TodoPage/>
      },
      {
        path : '/count',
        element: <CountPage/>
      }
    ]
  },
  {
    path:'/login',
    element: <div><LoginPage/></div>,  //belom di implement
  },
  {
    path:'/explore',
    element: <div><Explore/></div>
  },
  {
    path:'/register',
    element: <div><Register/></div>,  //belom di implement
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
