import {
  createBrowserRouter,
 
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Components/Pages/ErrorPage/Error";
import Home from "../Components/Pages/HomePage/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>, 
      errorElement: <Error></Error>, 
      children:  [
        {
            path: '/', 
            element: <Home></Home>
        }
      ]
    },
  ]);


export default router; 