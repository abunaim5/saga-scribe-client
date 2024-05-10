import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";

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
        }
      ],
    },
  ]);

  export default router;