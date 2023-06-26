import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './component/AppLayout/Layout';
import Dashboard from './component/Dashboard';
import Buttons from './component/Component/Buttons'
import Cards from './component/Component/Cards';
import Color from './component/Utilities/Color'
import Border from './component/Utilities/Border';
import Animation from './component/Utilities/Animation';
import Other from './component/Utilities/Other';
import LoginPage from './component/Pages/LoginPage';
import RegisterPage from './component/Pages/RegisterPage';
import ForgotPassword from './component/Pages/ForgotPassword';
import Error404 from './component/Pages/Error404';
import BlankPage from './component/Pages/BlankPage';
import Charts from './component/Charts';
import Tables from './component/Tables';

function App() {
  return (
    <>
    {/* Route the path */}
    <BrowserRouter>
        <Routes>
          {/* Layout is fixed for all components here and Outlet is used in Layout.js to render the components */}
              <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path='/Dashboard' element={<Dashboard />}/>
                <Route path='/component/Component/Buttons' element={<Buttons />} />
                <Route path='/component/Component/Cards' element={<Cards />} />
                <Route path='/Utilities/Color' element={<Color />} />
                <Route path='/Utilities/Border' element={<Border />} />
                <Route path='/Utilities/Animation' element={<Animation />} />
                <Route path='/Utilities/Other' element={<Other />} />
                <Route path='/Pages/Error404' element={<Error404 />} />
                <Route path='/Pages/BlankPage' element={<BlankPage />} />
                <Route path='/Charts' element={<Charts />} />
                <Route path='/Tables' element={<Tables />} /> 
              </Route>    
              <Route path='/Pages/LoginPage' element={<LoginPage />} />
              <Route path='/Pages/RegisterPage' element={<RegisterPage />} />
              <Route path='/Pages/ForgotPassword' element={<ForgotPassword />} />
        </Routes>
    </BrowserRouter>

   
    
    </>
  )
}

export default App