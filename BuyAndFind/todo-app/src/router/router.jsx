import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import ToDoPage from "../pages/ToDoPage";
import CountPage from "../pages/CountPage";
import LoginPage from "../pages/Login";
import Explore from "../pages/Explore";
import Register from "../components/Register";
import {ProductPage} from "../pages/ProductPage";
import {ProductDetail} from "../components/ProductDetail";

const router = createBrowserRouter([
    {
      path : '/', 
      element : <App />,
      errorElement : <NotFound/>,
      children : [
        {
            path:'/login',
            element: <div><LoginPage/></div>,
        },
        {
            path:'/explore',
            element: <div><Explore/></div>
        },
        {
            path:'/register',
            element: <div><Register/></div>,
        },
        {
            path: '/products',
            element: <ProductPage/>
        },
        {
            path: '/products/:id',
            element: <ProductDetail/>
        },
        {
          path : '/to_do',
          element: <ToDoPage/>
        },
        {
          path : '/count',
          element: <CountPage/>
        }
      ]
    }
  ])

export default router;