import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import AlgoliaSearch from "./Components/AlgoliaSearch/AlgoliaSearch.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Main Page
import ClassesContainers from "./Components/Classes/ClassesContainers";
// 404 Error Page
import ErrorPage from "./Components/Pages/errorPage";
// Secondary Pages
import FirstSecondary from "./Components/Pages/firstSecondary";
import SecondSecondary from "./Components/Pages/secondSecondary";
import ThirdSecondary from "./Components/Pages/thirdSecondary";
// Auth
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  // Your Firebase project configuration goes here
};

firebase.initializeApp(firebaseConfig);

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
