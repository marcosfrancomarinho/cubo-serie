import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { ICard } from './Card';

const Card: React.FC<ICard> = ({ title, url, path }) => {
	return (
		<Link to={path} className={style.card}>
			<img className={style.img} src={url} alt={title} />
		</Link>
	);
};

export default Card;
