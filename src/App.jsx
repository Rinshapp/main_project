import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import UserLayout from "./component/UserLayout/UserLayout";
import UserLayout from "./component/User/UserLayout/UserLayout";
import Home from "./component/Home/Home";
import './App.css'
import Details from "./component/Details/Details";
import Error from "./component/Error/Error";
import Login from "./Admin/Login/Login";
import Register from "./Admin/Register/Register";
import Cart from "./component/Cart/Cart";
import ProductView from "./component/ProductView/ProductView";
import LoginUser from "./component/User/Login/Login";
import RegisterUser from "./component/User/Register/Register";
import AdminLayout from "./Admin/AdminLayout/AdminLayout";
import AdminHome from "./Admin/Home/adminHome";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path:"details/:item",
          element:<Details/>
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/view',
          element:<ProductView/>
        }
      ],
    },


    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        
      ],
    },


    {
      path:'*',
      element:<Error/>,
    },
    {
      path:'/admin-login',
      element:<Login/>,
    },
    {
      path:'/admin-register',
      element:<Register/>
    },
    {
      path:'/user-login',
      element:<LoginUser/>,
    },
    {
      path:'/user-register',
      element:<RegisterUser/>
    },
    {
      path:'/adminHome',
      element:<AdminHome/>
    }
    
  ]);

  return <RouterProvider router={router} />;
};

export default App;
