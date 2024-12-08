import React from 'react';
import style from './Card.module.css';
interface ParamsCard {
    url: string;
    title: string;
}

const Card: React.FC<ParamsCard> = ({ title, url }) => {
    return (
        <div className={style.card}>
            <img className={style.img} src={url} alt={title} />
        </div>
    );
};

export default Card;
