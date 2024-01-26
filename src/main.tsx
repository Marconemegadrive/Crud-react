/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

// páginas
import Home from './routes/Home.tsx';
import NewPost from './routes/NewPost.tsx';

import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/new",
        element: <NewPost />
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)