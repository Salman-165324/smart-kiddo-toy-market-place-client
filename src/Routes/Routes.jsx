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
      ]
    },
  ]);


export default router; 