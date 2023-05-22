import React from 'react'
import ReactDOM from 'react-dom/client'
import '@smastrom/react-rating/style.css'


import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/routes'
import AuthProviders from './Providers/AuthProviders'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
