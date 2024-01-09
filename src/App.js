import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Getreq from './components/getreq/Getreq';
import Putreq from './components/putreq/Putreq';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Getreq />,
  },
  {
    path: "/putreq/:id",
    element: <Putreq />,
  },
]);
function App() {
  return (
        <RouterProvider router={router} />
         );
}

export default App;
