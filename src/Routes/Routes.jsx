import {
  createBrowserRouter,
 
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Components/Pages/ErrorPage/Error";
import Home from "../Components/Pages/HomePage/Home";
import AllToys from "../Components/Pages/AllToysPage/AllToys";
import MyToys from "../Components/Pages/MyToysPage/MyToys";
import Blog from "../Components/Pages/BlogPage/Blog";
import Login from "../Components/Pages/LoginPage/Login";
import Signup from "../Components/Pages/SignupPage/Signup";
import ToyDetail from "../Components/Pages/ToyDetailsPage/ToyDetail";
import PrivateRoute from "./PrivateRoute";
import AddToyForm from "../Components/Pages/AddToyPage/AddToyForm";
import UpdateToy from "../Components/Pages/UpdateToyPage/UpdateToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>, 
      errorElement: <Error></Error>, 
      children:  [
        {
            path: '/', 
            element: <Home></Home>
        }, 
        {
          path: 'all-toys', 
          element: <AllToys></AllToys>
        },
        {
          path: 'my-toys', 
          element: <PrivateRoute><MyToys /></PrivateRoute>
        },
        {
          path: 'add-toys', 
          element: <PrivateRoute><AddToyForm></AddToyForm></PrivateRoute>
        },
        {
          path: '/blog', 
          element: <Blog></Blog>
        },
        {
          path: 'login', 
          element: <Login></Login>
        }, 
        {
          path: 'signup', 
          element: <Signup></Signup>
        }, {
          path: 'toyDetails/:id',
          element: <PrivateRoute><ToyDetail></ToyDetail></PrivateRoute>, 
          loader: ({params}) => fetch(`https://toy-market-place-server-side.onrender.com/toyDetails/${params.id}`)
        }, 
        {
          path: 'updateToy/:id', 
          element: <UpdateToy></UpdateToy>
        }
      ]
    },
  ]);


export default router; 