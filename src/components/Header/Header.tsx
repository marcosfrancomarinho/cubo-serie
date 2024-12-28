import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import { IHeader } from './Header.iterface';
import { useHeader } from './UseHeader';

const Header: React.FC<IHeader> = ({ menu, title }) => {
	const { setVisibility, visibility } = useHeader();
	return (
		<header className={style.header}>
			<Link className={style.title} to="/">
				{title}
			</Link>
			<button
				onClick={() => setVisibility(!visibility)}
				className={style.btn_close}
			>
				&#9776;
			</button>
			<ul className={`${style.menu} ${visibility ? style.show : ''}`}>
				{menu.map((item, idx) => (
					<Menu item={item} key={idx} />
				))}
			</ul>
		</header>
	);
};

export default Header;
