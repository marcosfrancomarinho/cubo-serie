import React, { ReactNode } from 'react';
import style from './Btn.module.css';

interface ParamsBtnSubmit {
	content: string | ReactNode;
}

const BtnSubmit: React.FC<ParamsBtnSubmit> = ({ content }) => {
	return (
		<button
			className={`
            ${style.btn}
            ${style.btn_submit}
        `}
			type="submit"
		>
			{content}
		</button>
	);
};
export default BtnSubmit;
