import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root';
import Home from './components/Home/Home.jsx'
import Work from './components/Work/Work.jsx'
import Services from './components/Services/Services.jsx';

const router = createBrowserRouter([
      {
        path: '/',
        element: <Root/>,
        children : [
          {
            path :'',
          element: <Home/>,
        },
        {
          path:"/work",
          element: <Work/>
        },
        {
          path:"/services",
          element: <Services/>
        }
      
      
      ]
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
