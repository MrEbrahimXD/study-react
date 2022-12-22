import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import AlgoliaSearch from "./Components/AlgoliaSearch/AlgoliaSearch.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClassesContainers from "./Components/Classes/ClassesContainers";
import ErrorPage from "./Components/Pages/errorPage";
// Secondary Pages
import FirstSecondary from "./Components/Pages/firstSecondary";
import SecondSecondary from "./Components/Pages/secondSecondary";
import ThirdSecondary from "./Components/Pages/thirdSecondary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClassesContainers />,
  },
  {
    path: "firstSecondary",
    element: <FirstSecondary />,
  },
  {
    path: "secondSecondary",
    element: <SecondSecondary />,
  },
  {
    path: "thirdSecondary",
    element: <ThirdSecondary />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/404",
    element: <ErrorPage />,
  },
]);

const AlgoliaSearchBox = ReactDOM.createRoot(
  document.getElementById("content")
);
AlgoliaSearchBox.render(
  <React.StrictMode>
    <AlgoliaSearch />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <RouterProvider router={router}  />
  <>
    <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
