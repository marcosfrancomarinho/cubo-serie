import React from 'react';
import Header from '../../components/Header/Header';
import { Context, ValuesParams } from '../../hooks/Context';
import Footer from '../../components/Footer/Footer';
import RegisterForm from '../../components/Form/RegisterForm';
import UserAuthenticate from '../../components/UserAuthenticate/UserAuthenticate';

const Register: React.FC = () => {
	const { menu, title, footer } = React.useContext(Context) as ValuesParams;
	return (
		<UserAuthenticate router="/" path="/test">
			<Header menu={menu} title={title} />
			<main>
				<RegisterForm />
			</main>
			<Footer footer={footer} />
		</UserAuthenticate>
	);
};
export default Register;
