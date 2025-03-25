import React from "react";
import { Button } from "./components/ui/button";
import Auth from "./pages/auth";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />}/>
        <Route path="*" element={<Navigate to='/auth'/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
