import React from 'react';
import Header from '../../components/Header/Header';
import { Context, ValuesParams } from '../../hooks/Context';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/Form/LoginForm';
import UserAuthenticate from '../../components/UserAuthenticate/UserAuthenticate';

const Login: React.FC = () => {
	const { menu, title, footer } = React.useContext(Context) as ValuesParams;
	return (
		<UserAuthenticate router="/" path="/test">
			<Header menu={menu} title={title} />
			<main>
				<LoginForm />
			</main>
			<Footer footer={footer} />
		</UserAuthenticate>
	);
};
export default Login;
