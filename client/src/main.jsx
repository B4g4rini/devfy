import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home/Home.jsx";
import Start from "./routes/start/Start.jsx";
import Procurar from "./routes/procurar/Procurar.jsx";
import Logar from "./routes/login/Login.jsx";
import Inscrever from "./routes/insc/insc.jsx";
import Error from "./routes/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "search", element: <Procurar /> },
      { path: "Init", element: <Start /> },
      { path: "login", element: <Logar /> },
      { path: "insc", element: <Inscrever /> },


    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
