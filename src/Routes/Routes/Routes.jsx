import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import SignIn from "../../Pages/SignIn/SignIn";
import BlogDetails from "../../Pages/BlogDetails/BlogDetails";
import AllBlogs from "../../Pages/AllBlogs/AllBlogs";
import AddBlog from "../../Pages/AddBlog/AddBlog";
import Wishlist from "../../Pages/Wishlist/Wishlist";
import UpdateBlog from "../../Pages/UpdateBlog/UpdateBlog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/register',
          element: <SignUp />
        },
        {
          path: '/login',
          element: <SignIn />
        },
        {
          path: '/details/:id',
          element: <BlogDetails />
        },
        {
          path: '/blogs',
          element: <AllBlogs />
        },
        {
          path: '/addBlog',
          element: <AddBlog />
        },
        {
          path: '/wishlist',
          element: <Wishlist />
        },
        {
          path: '/update/:id',
          element: <UpdateBlog />
        }
      ],
    },
  ]);

  export default router;