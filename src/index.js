import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TeamProfile } from "./components/TeamProfile";
import { GamesResults } from "./components/GamesResults";
import { TeamsGroup } from "./components/TeamsGroup";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    ),
    errorElement: <p>error</p>,
    children: [
      {
        path: "",
        element: <GamesResults />,
      },
      {
        path: "/game/:teamName",
        element: <TeamProfile />,
      },
      {
        path: "/teams",
        element: <TeamsGroup />,
      },
      {
        path: "/team/:teamName",
        element: <TeamProfile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
