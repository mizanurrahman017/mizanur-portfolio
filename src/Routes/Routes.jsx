import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Root/ErrorPage/ErrorPage';
import Home from '../Pages/Root/Home/Home';
import About from '../Components/About/About';
import Worked from '../Pages/Root/Worked/Worked';
import Skills from '../Pages/Root/Skills/Skills';
import Contract from '../Pages/Root/Contract/Contract';
import Education from '../Pages/Root/Education/Education';




export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index:true,
            path:"/",
            Component:Home
        },
        {
            path:"about",
            Component:About,
        },
        {
            path:"worked",
            element:<Worked></Worked>,
         },
         {
            path:"skills",
            element:<Skills></Skills>,

         },
         {
            path:"contact",
            element:<Contract></Contract>,
         },
         {
          path:"education",
          element:<Education></Education>
         }
       
    ]
  },
]);