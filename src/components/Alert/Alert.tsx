import React, { ReactNode } from 'react';
import style from './Alert.module.css';

interface ParamsAlert {
	children: ReactNode;
	hide: boolean;
	setHide: React.Dispatch<React.SetStateAction<boolean>>;
}

const Alert: React.FC<ParamsAlert> = ({ children, setHide, hide }) => {
	return (
		<div className={style.alert}>
			<span onClick={() => setHide(!hide)} className={style.btnClose}>
				x
			</span>
			<div className={style.content}>{children}</div>
		</div>
	);
};

export default Alert;
