import React from "react";
import Header from "../../components/Header/Header";
import { Context, ValuesParams } from "../../hooks/Context";
import Card from "../../components/Card/Card";
import style from "./Home.module.css";
import Footer from "../../components/Footer/Footer";
import Fallback from "../../components/Fallback/Fallback";

const Home: React.FC = () => {
	const { menu, images, footer } = React.useContext(Context) as ValuesParams;
	if (!menu) return <Fallback />;
	return (
		<>
			<Header menu={menu.public} title={menu.title} />
			<main>
				<div className={style.container_card}>
					{images.map(({ url, title }) => (
						<Card path="/login" key={title} title={title} url={url} />
					))}
				</div>
			</main>
			<Footer footer={footer} />
		</>
	);
};

export default Home;
