import React, { ReactNode } from 'react';
import style from './Btn.module.css';

interface ParamsBtnSubmit {
	content: string | ReactNode;
	disabled: boolean;
}

const BtnSubmit: React.FC<ParamsBtnSubmit> = ({ content, disabled }) => {
	return (
		<button
			disabled={disabled}
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
