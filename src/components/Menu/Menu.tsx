import React from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.css";
import { accentRemover } from "../../utils/formart.data";
import { IMenu } from "./Menu.type";

const Menu: React.FC<IMenu> = ({ item }) => {
	return (
		<Link className={style.item} to={accentRemover(item)}>
			{item}
		</Link>
	);
};
export default Menu;
