import React from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './pages/error';
import Layout from './Layout';

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Layout é usado para todas as páginas filhas
      errorElement: <ErrorPage />,
      children: [
        {
          // index: true, // Esta é a rota padrão para "/"
          path: "/",
          element: <Home />,
        },
        {
          path: "*",
          element: <div>Error!</div>,
        },
      ],
    },
  ]);


  return (<RouterProvider router={router} />)
}