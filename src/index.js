import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetPassword from './pages/ResetPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path='/recuperar_senha/' element={<ResetPassword />} />
        </Routes>
    </BrowserRouter>
);

