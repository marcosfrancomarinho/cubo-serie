import React from 'react';
import { Link } from 'react-router-dom';
import style from './Menu.module.css';
import { accentRemover } from '../../utils/formart';

interface ParamsMenu {
    item: string;
}

const Menu: React.FC<ParamsMenu> = ({ item }) => {
    return (
        <Link className={style.item} to={accentRemover(item)}>
            {item}
        </Link>
    );
};
export default Menu;
