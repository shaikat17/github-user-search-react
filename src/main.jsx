import { Auth0Provider } from "@auth0/auth0-react";
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'


import { Error, Login, PrivateRoute } from './pages'
import { GithubProvider } from './context/context.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><App/></PrivateRoute>,
    errorElement: <Error></Error>,
  },
  {
    path: '/login',
    element: <Login></Login>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain={import.meta.env.VITE_DOMAIN}
    clientId={import.meta.env.VITE_CLIENTID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <GithubProvider>
    <RouterProvider router={router} />
    </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
