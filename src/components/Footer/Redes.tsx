import React from 'react';
import style from './Footer.module.css';

interface ParamsRedes {
    id: number;
    redes: string;
    url: string;
}

const Redes: React.FC<ParamsRedes> = ({ redes, url, id }) => {
    return (
        <li key={id} className={style.footer_item}>
            <a href={url} className={style.footer_link}>
                {redes}
            </a>
        </li>
    );
};

export default Redes;
