import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';

const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Register />} path="/signup" />
				<Route element={<Login />} path="/login" />
			</Routes>
		</BrowserRouter>
	);
};
export default AppRouter;
