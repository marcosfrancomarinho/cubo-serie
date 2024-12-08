import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route } from 'react-router-dom';
import './styles/styles.css';

import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Global from './hooks/Gobal';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Global>
            <Route element={<Home />} path="/" />
            <Route element={<Register />} path="/siginup" />
            <Route element={<Login />} path="/login" />
        </Global>
    </StrictMode>,
);
