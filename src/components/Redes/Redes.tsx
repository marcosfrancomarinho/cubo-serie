import React from 'react';
import style from './Redes.module.css';
import { IRedes } from './Redes.interface';

const Redes: React.FC<IRedes> = ({ redes, url, id }) => {
	return (
		<li key={id} className={style.redes_item}>
			<a href={url} className={style.redes_link}>
				{redes}
			</a>
		</li>
	);
};

export default Redes;
