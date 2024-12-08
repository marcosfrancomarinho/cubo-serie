import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.css';
import Global from './hooks/Gobal';
import AppRouter from './routers/AppRouter';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Global>
            <AppRouter />
        </Global>
    </StrictMode>,
);
