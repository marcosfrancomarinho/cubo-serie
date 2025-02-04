import React from "react";
import Header from "../../components/Header/Header";
import { Context, ValuesParams } from "../../hooks/Context";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/Form/Login/Login.form";
import Fallback from "../../components/Fallback/Fallback";

const Login: React.FC = () => {
	const { menu, footer } = React.useContext(Context) as ValuesParams;
	if (!menu) return <Fallback />;
	return (
		<>
			<Header menu={menu.public} title={menu.title} />
			<main>
				<LoginForm />
			</main>
			<Footer footer={footer} />
		</>
	);
};
export default Login;
