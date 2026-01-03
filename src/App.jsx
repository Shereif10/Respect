import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Layout from "./pages/Layout/Layout";
import Home from './pages/HomePage/HomePage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import CaseStudiesPage from './pages/CaseStudiesPage/CaseStudiesPage'
import ContactPage from './pages/ContactPage/ContactPage'
import ValuesPage from './pages/ValuesPage/ValuesPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'



let routers = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <AboutUsPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'case-studies', element: <CaseStudiesPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'values', element: <ValuesPage /> },
      { path: '*', element: <NotFoundPage /> },

  ]}
])

export default function App() {
  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}
