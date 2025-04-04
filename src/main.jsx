import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Dashbord from './components/Dashbord/Dashbord.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';
let router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
        path:'books/:bookId',
        element:<BookDetail></BookDetail>,
        loader:()=>fetch('/booksData.json')
      },
      {
        path:'dashboard',
        element:<Dashbord></Dashbord>
      }
    ]
    
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
