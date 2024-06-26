import SinglePage from "./routes/SinglePage/SinglePage";
import Home from "./routes/homePage/Home";
import  { Layout, RequireAuth } from "./routes/layout/Layout";
import ListPage from "./routes/listPage/ListPage";
import Login from "./routes/login/Login";

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Register from "./routes/register/Register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/NewPostPage";
import { listPageLoader, singlePageLoader } from "./lib/loaders";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/list",
          element:<ListPage/>,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element:<SinglePage/>,
          loader: singlePageLoader,
        },
       
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element:<ProfilePage/>
        },
        {
          path: "/profile/update",
          element:<ProfileUpdatePage />
        },
        {
          path: "/add",
          element:<NewPostPage/>
        },
      ]
    }
  ]);

  return (
  
    <RouterProvider router={router}/>
  );
}

export default App;
