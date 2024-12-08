import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
interface ParamsCard {
    url: string;
    title: string;
}

const Card: React.FC<ParamsCard> = ({ title, url }) => {
    return (
        <Link to='/login' className={style.card}>
            <img className={style.img} src={url} alt={title} />
        </Link>
    );
};

export default Card;
