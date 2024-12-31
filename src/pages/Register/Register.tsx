import React from 'react';
import Header from '../../components/Header/Header';
import { Context, ValuesParams } from '../../hooks/Context';
import Footer from '../../components/Footer/Footer';
import RegisterForm from '../../components/Form/Register/RegisterForm';
import Fallback from '../../components/Fallback/Fallback';

const Register: React.FC = () => {
	const { menu, title, footer } = React.useContext(Context) as ValuesParams;
	if (!menu) return <Fallback />;
	return (
		<>
			<Header menu={menu[0].public} title={title} />
			<main>
				<RegisterForm />
			</main>
			<Footer footer={footer} />
		</>
	);
};
export default Register;
