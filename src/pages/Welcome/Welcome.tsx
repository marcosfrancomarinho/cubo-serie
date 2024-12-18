import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Context, ValuesParams } from '../../hooks/Context';

const Welcome: React.FC = () => {
	const { footer } = React.useContext(Context) as ValuesParams;
	return (
		<>
			<Header menu={['Inicio', 'Novidades']} title="Clube das Series" />
			<main>
				<h1>
               
            </h1>
			</main>
			<Footer footer={footer} />
		</>
	);
};

export default Welcome;
