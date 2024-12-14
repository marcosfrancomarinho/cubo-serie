import React from 'react';
import urlPerfil from '../../../public/images/perfil.jpg';
import style from './Perfil.module.css';
import { Link } from 'react-router-dom';

interface ParamsPerfil {
	name: string;
}

const Perfil: React.FC<ParamsPerfil> = ({ name }) => {
	return (
		<Link to="/login" className={style.container_perfil}>
			<h3 className={style.name_user}>{name}</h3>
			<div className={style.box_img}>
				<img className={style.img_perfil} src={urlPerfil} alt="perfil logado" />
			</div>
		</Link>
	);
};

export default Perfil;
