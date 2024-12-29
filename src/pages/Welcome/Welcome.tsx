import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Context, ValuesParams } from '../../hooks/Context';
import Card from '../../components/Card/Card';

const Welcome: React.FC = () => {
	const { footer, menu, title, images } = React.useContext(
		Context,
	) as ValuesParams;
	return (
		<>
			<Header menu={menu.private} title={title} />
			<main
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '5px',
				}}
			>
				{images.map(({ title, url }) => (
					<Card path="#" title={title} url={url} key={title} />
				))}
			</main>
			<Footer footer={footer} />
		</>
	);
};

export default Welcome;
