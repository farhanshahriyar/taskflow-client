import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/UserDashboard/Dashboard/Dashboard";
import AddTasks from "../Pages/UserDashboard/AddTask/AddTasks";
import ProfileSettings from "../Pages/ProfileSettings/ProfileSettings";
import ProtectedRoute from "./ProtectedRoutes";
import Projects from "../Pages/UserDashboard/Projects/Projects";
import Tasks from "../Pages/UserDashboard/Tasks/Tasks";
import Message from "../Pages/UserDashboard/Message/Message";
import Jobs from "../Pages/UserDashboard/Jobs/Jobs";
import Update from "../Pages/UserDashboard/UpdateTask/Update";
import UserProfile from "../Pages/UserDashboard/UserProfile/UserProfile";
import TaskFlowUpdate from "../Pages/TaskFlowUpdate/TaskFlowUpdate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/user-profile",
        element: (
          <ProtectedRoute>
            <UserProfile/>
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <Error /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      // {
      //   path: "/dashboard",
      //   element: (
      //     <ProtectedRoute>
      //       <Dashboard />
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: "/dashboard/add-task",
        element: (
          <ProtectedRoute>
            <AddTasks />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/projects",
        element: (
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/tasks",
        element: (
          <ProtectedRoute>
            <Tasks />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/message",
        element: (
          <ProtectedRoute>
            <Message />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/jobs",
        element: (
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/software-update-news",
        element: (
          <ProtectedRoute>
            <TaskFlowUpdate/>
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/update-task/:id",
        element: (
          <ProtectedRoute>
            <Update/>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tasks/${params.id}`).then(
            (res) => res.json()
          ),
      },
    ],
  },
]);
