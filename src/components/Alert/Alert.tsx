import React from 'react';
import style from './Alert.module.css';
import { IAlert } from './Alert';

const Alert: React.FC<IAlert> = ({ children, setHide, hide }) => {
	return (
		<div className={style.alert}>
			<div className={style.content}>{children}</div>
			<span onClick={() => setHide(!hide)} className={style.btnClose}>
				X
			</span>
		</div>
	);
};

export default Alert;
