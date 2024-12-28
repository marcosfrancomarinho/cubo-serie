import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Global from './hooks/Gobal';
import AppRouter from './routers/AppRouter';
import './styles/styles.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Global>
			<AppRouter />
		</Global>
	</StrictMode>,
);
