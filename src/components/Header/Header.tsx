import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Perfil from '../Perfil/Perfil';
import { Context, ValuesParams } from '../../hooks/Context';

interface ParamsHeader {
	title: string;
	menu: string[];
}

const Header: React.FC<ParamsHeader> = ({ menu, title }) => {
	const [visibility, setVisibility] = React.useState<boolean>(false);
	const { login, nameUser } = React.useContext(Context) as ValuesParams;
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
			{login ? (
				<Perfil name={nameUser} />
			) : (
				<ul className={`${style.menu} ${visibility ? style.show : ''}`}>
					{menu.map((item, idx) => (
						<Menu item={item} key={idx} />
					))}
				</ul>
			)}
		</header>
	);
};

export default Header;
