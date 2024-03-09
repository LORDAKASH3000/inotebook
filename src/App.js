import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import TopNavbar from './components/Common/Navbar';
import Home from "./components/Others/Home";
import About from "./components/Others/About";
import LogIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import LogOut from "./components/Authentication/SignOut";
import NoteState from "./Context/Notes/NoteState";
import UserState from "./Context/User/UserState";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TopNavbar />,
      children:[
        { 
          path: "/",
          element: <Home />,
        },
        { 
          path: "login",
          element: <LogIn />,
        },
        { 
          path: "register",
          element: <SignUp />,
        },
        { 
          path: "logout",
          element: <LogOut />,
        },
        {
          path: "about",
          element: <About />,
        }
      ]
    },
  ]);
  return (
    <UserState>
      <NoteState>
        <div className="App">
          <RouterProvider router={router}/>
        </div>
      </NoteState>
    </UserState>
  );
}

export default App;
