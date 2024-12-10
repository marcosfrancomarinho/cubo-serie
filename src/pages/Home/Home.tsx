import React from 'react';
import Header from '../../components/Header/Header';
import { Context, ValuesParams } from '../../hooks/Context';
import Card from '../../components/Card/Card';
import style from './Home.module.css';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
	const { menu, title, images, footer } = React.useContext(
		Context,
	) as ValuesParams;
	return (
		<>
			<Header menu={menu} title={title} />
			<main>
				<div className={style.container_card}>
					{images.map(({ url, title }) => (
						<Card key={title} title={title} url={url} />
					))}
				</div>
			</main>
			<Footer footer={footer} />
		</>
	);
};

export default Home;
