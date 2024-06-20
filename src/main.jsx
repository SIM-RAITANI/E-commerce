import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from "./components/Login.jsx"
import SignUp from "./components/SignUp.jsx"
import Contact from "./components/Contact.jsx"
import Home from './components/Home.jsx'
import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from "./Layout.jsx"
import ContextProvider from "./context/Context.jsx"
import Sell from './components/Sell.jsx'
import NewArrival from "./components/NewArrival.jsx"
import Specificproductpage from './components/Specificproductpage.jsx'
import Cart from "./components/Cart.jsx"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='contact' element={<Contact />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='sell' element={<Sell />} />
      <Route path="arrival" element={<NewArrival/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route exact path="/product/:type/:id" element={<Specificproductpage />} />
      
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router} >
      <Layout/>
      </RouterProvider>

  </ContextProvider>
)
