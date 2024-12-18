import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import RouterPublic from './RouterPublic';
import RouterPrivate from './RouterPrivate';
import Welcome from '../pages/Welcome/Welcome';

const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={
						<RouterPublic
							redirectionRouter="/welcome"
							pathname="/"
							children={<Home />}
						/>
					}
					path="/"
				/>
				<Route
					element={
						<RouterPublic
							redirectionRouter="/welcome"
							pathname="/"
							children={<Register />}
						/>
					}
					path="/signup"
				/>
				<Route
					element={
						<RouterPublic
							redirectionRouter="/welcome"
							pathname="/"
							children={<Login />}
						/>
					}
					path="/login"
				/>
				<Route
					element={
						<RouterPrivate redirectionRouter="/" pathname="/" children={<Welcome />} />
					}
					path="/welcome"
				/>
			</Routes>
		</BrowserRouter>
	);
};
export default AppRouter;
