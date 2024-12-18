import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Test from '../pages/Test/Test';
import RouterPublic from './RouterPublic';
import RouterPrivate from './RouterPrivate';

const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={
						<RouterPublic
							redirectionRouter="/test"
							pathname="/"
							children={<Home />}
						/>
					}
					path="/"
				/>
				<Route
					element={
						<RouterPublic
							redirectionRouter="/test"
							pathname="/"
							children={<Register />}
						/>
					}
					path="/signup"
				/>
				<Route
					element={
						<RouterPublic
							redirectionRouter="/test"
							pathname="/"
							children={<Login />}
						/>
					}
					path="/login"
				/>
				<Route
					element={
						<RouterPrivate redirectionRouter="/" pathname="/" children={<Test />} />
					}
					path="/test"
				/>
			</Routes>
		</BrowserRouter>
	);
};
export default AppRouter;
