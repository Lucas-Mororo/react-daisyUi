import React from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import Layout from './Layout';
import OrdemServicos from './pages/OrdemServicos';
import Estoque from './pages/Estoque';
import Cliente from './pages/Clientes';

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "ordem-servicos",
          element: <OrdemServicos />,
        },
        {
          path: "estoque",
          element: <Estoque />,
        },
        {
          path: "cliente",
          element: <Cliente />,
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