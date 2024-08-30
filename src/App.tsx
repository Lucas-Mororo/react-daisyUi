import React from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './pages/error';
import Layout from './Layout';
import OrdemServicos from './pages/ordem-servicos';
import Estoque from './pages/estoque';
import Cliente from './pages/clientes';

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Layout é usado para todas as páginas filhas
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