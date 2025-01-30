import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import RouterPublic from "./public.router";
import RouterPrivate from "./private.router";
import Welcome from "../pages/Welcome/Welcome";

const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<RouterPublic redirectionToRouterAuthenticate="/welcome" pathname="/" children={<Home />} />} path="/" />
				<Route
					element={<RouterPublic redirectionToRouterAuthenticate="/welcome" pathname="/" children={<Register />} />}
					path="/signup"
				/>
				<Route
					element={<RouterPublic redirectionToRouterAuthenticate="/welcome" pathname="/" children={<Login />} />}
					path="/login"
				/>
				<Route element={<RouterPrivate redirectionToRouterDenied="/" pathname="/" children={<Welcome />} />} path="/welcome" />
			</Routes>
		</BrowserRouter>
	);
};
export default AppRouter;
