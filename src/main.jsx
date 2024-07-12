import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Hero } from "./Pages/Hero/Hero.jsx";
import { HelmetProvider } from "react-helmet-async";
import { AboutMe } from "./Pages/AboutMe/AboutMe.jsx";
import RecentProjects from "./Pages/RecentProjects/RecentProjects.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const router = createBrowserRouter([
  { path: "/", element: <Hero /> },
  { path: "/aboutMe", element: <AboutMe /> },
  { path: "/recentProjects", element: <RecentProjects /> },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
