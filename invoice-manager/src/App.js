import './App.css';
import React from 'react';
import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoicesCreation from './pages/InvoicesCreation';
import UserCreation from './pages/UserCreation';


function App() {
 

    return (
      
    <BrowserRouter>
    <Routes>
        <Route
            path="/:id"
            element={<UserDetails />}
        />
        <Route
            path="/"
            element={<UserList />}
        />
         <Route
            path="/:idUser/invoices/add"
             element={< InvoicesCreation/>}
        />
         <Route
            path="/create"
            element={<UserCreation />}
        />
    </Routes>
</BrowserRouter>
    )

  }

export default App;


   
 
