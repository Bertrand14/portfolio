import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './components/Layout'
import navParts from './assets/data/layerParts'

export default function App(){
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />}>
    <Route path="/" element={<Navigate to="/AboutMe" />} />
    {navParts.map((nav) => (
     <Route key={nav.path} path={nav.path} element={nav.components} />
    ))}
    </Route>
   </Routes>
  </BrowserRouter>
 )
}