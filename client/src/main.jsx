import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home/Home.jsx";
import Procurar from "./routes/procurar/Procurar.jsx";
import Logar from "./routes/login/Login.jsx";
import Inscrever from "./routes/insc/insc.jsx";
import Cookies from "./routes/cookies/Cookies.jsx";
import Error from "./routes/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <App /> },
      { path: "search", element: <Procurar /> },
      { path: "Init", element: <Home /> },
      { path: "login", element: <Logar /> },
      { path: "cookie", element: <Cookies /> },

      { path: "insc", element: <Inscrever /> },


    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
