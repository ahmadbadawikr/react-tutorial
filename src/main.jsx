import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './globals.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UsersPage } from './pages/UserPage.jsx'
import { BlogPostsPage } from './pages/BlogPostPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/users',
    element: <UsersPage/>
  },
  {
    path:'/blog-posts',
    element: <BlogPostsPage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
