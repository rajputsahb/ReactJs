import React from 'react'
import App from './App.jsx'
import About from './components/pages/About.jsx'
import Contacts from './components/pages/Contacts.jsx'
import Products from './components/pages/Products.jsx'
import Home from './components/pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import ReactDOM from 'react-dom/client'
import {Route, Outlet, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './App.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>

      <Route index element={<Home/>} />
      <Route path='about' element={<About/>}   />
      <Route path='contact' element={<Contacts/>}   />
     < Route path='products' element={<Products/>}   />
     < Route path='navbar' element={<Navbar/>}   />


    </Route>
  )
)





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
   <RouterProvider   router={router}/>
   
  </React.StrictMode>,
)
