import React from 'react';
import { Link } from 'react-router-dom';
import style from './Menu.module.css';

interface ParamsMenu {
    item: string;
}

const Menu: React.FC<ParamsMenu> = ({ item }) => {
    const accentRemover = (text: string): string => {
        const root: string = '/';
        const path: string = root.concat(
            text
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f\s]/g, ''),
        );
        if (path === root.concat('inicio')) return root;
        return path;
    };
    return (
        <Link className={style.item} to={accentRemover(item)}>
            {item}
        </Link>
    );
};
export default Menu;
