import { createBrowserRouter } from "react-router-dom";

import Root from "./layout/Root.jsx";
import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx";

import SignUp from "./routes/SignUp.jsx";
import Cart from "./routes/Cart.jsx";
import NotFound from "./routes/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
