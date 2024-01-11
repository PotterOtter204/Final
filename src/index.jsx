import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Legends from "./Legends";
import Forum from "./Forum";
import Lore from "./Lore";
import GameModes from "./GameModes";
import Chests from "./Chests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/legends",
    element: <Legends />,
  },
  {
    path: "/forum",
    element: <Forum />,
  },
  {
    path: "/lore",
    element: <Bosses />,
  },
  {
    path: "/chests",
    element: <Chests />,
  },
  {
    path: "/gamemodes",
    element: <GameModes />,
  },
  ,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
