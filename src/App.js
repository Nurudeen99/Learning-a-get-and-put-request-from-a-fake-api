import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Getreq from './components/getreq/Getreq';
import Putreq from './components/putreq/Putreq';
import LogIn from './components/logIn/LogIn';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';
import { ToastContainer } from 'react-toastify';
import AboutMe from './components/about/AboutMe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Getreq />,
  },
  {
    path: "/putreq/:id",
    element: <Putreq />,
  },
  {
    path: "/logIn",
    element: <LogIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/aboutme",
    element: <AboutMe />,
  },
]);
function App() {
  return (
    <>
    <ToastContainer/>
    <RouterProvider router={router} />
    </>
        
         );
}

export default App;
