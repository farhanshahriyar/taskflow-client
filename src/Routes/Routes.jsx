import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/UserDashboard/Dashboard/Dashboard";
import AddTasks from "../Pages/UserDashboard/AddTask/AddTasks";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Error/>,
      children: [
        { path: "/", element: <Home/> },
        { path: "/login", element: <Login/> },
        { path: "/register", element: <Register/>},
        { path: "*", element: <Error/> }
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
      children: [
        { path: "/dashboard", element: <Dashboard/> },
        { path: "/dashboard/add-task", element: <AddTasks/> },
      ]
    }
  ]);