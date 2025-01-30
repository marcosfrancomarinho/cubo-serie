import React from "react";
import style from "./Footer.module.css";
import Redes from "../Redes/Redes";
import { IFooter } from "./Footer";

const Footer: React.FC<IFooter> = ({ footer }) => {
	return (
		<footer className={style.footer}>
			<ul className={style.footer_menu}>
				<div className={style.footer_column}>
					{footer
						.filter(({ id }) => id % 2 === 0)
						.map((item) => (
							<Redes key={item.id} {...item} />
						))}
				</div>
				<h3 className={style.dev}>&copy; marcosfrancomarinho</h3>
				<div className={style.footer_column}>
					{footer
						.filter(({ id }) => id % 2 === 1)
						.map((item) => (
							<Redes key={item.id} {...item} />
						))}
				</div>
			</ul>
		</footer>
	);
};
export default Footer;
