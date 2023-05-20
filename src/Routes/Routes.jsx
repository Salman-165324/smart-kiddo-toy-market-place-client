import {
  createBrowserRouter,
 
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Components/Pages/ErrorPage/Error";
import Home from "../Components/Pages/HomePage/Home";
import AllToys from "../Components/Pages/AllToysPage/AllToys";
import MyToys from "../Components/Pages/MyToysPage/MyToys";
import AddToy from "../Components/Pages/AddToyPage/AddToy";
import Blog from "../Components/Pages/BlogPage/Blog";
import Login from "../Components/Pages/LoginPage/Login";
import Signup from "../Components/Pages/SignupPage/Signup";

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
          element: <MyToys />
        },
        {
          path: 'add-toys', 
          element: <AddToy />
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
        }
      ]
    },
  ]);


export default router; 