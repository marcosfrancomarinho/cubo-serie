import React from 'react';
import style from './Redes.module.css'

interface ParamsRedes {
    id: number;
    redes: string;
    url: string;
}

const Redes: React.FC<ParamsRedes> = ({ redes, url, id }) => {
    return (
        <li key={id} className={style.redes_item}>
            <a href={url} className={style.redes_link}>
                {redes}
            </a>
        </li>
    );
};

export default Redes;
