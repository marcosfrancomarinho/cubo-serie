import React from 'react';
import Header from '../../components/Header/Header';
import { Context, ValuesParams } from '../../hooks/Context';
import Footer from '../../components/Footer/Footer';
import RegisterForm from '../../components/Form/RegisterForm';

const Register: React.FC = () => {
	const { menu, title, footer } = React.useContext(Context) as ValuesParams;
	return (
		<>
			<Header menu={menu.public} title={title} />
			<main>
				<RegisterForm />
			</main>
			<Footer footer={footer} />
		</>
	);
};
export default Register;
