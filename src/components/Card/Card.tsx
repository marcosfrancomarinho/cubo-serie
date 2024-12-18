import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

interface ParamsCard {
    url: string;
    title: string;
    path:string;
}

const Card: React.FC<ParamsCard> = ({ title, url , path}) => {
    return (
        <Link to={path} className={style.card}>
            <img className={style.img} src={url} alt={title} />
        </Link>
    );
};

export default Card;
