import React from 'react';
import style from '../../../styles/Btn.module.css';
import { IBtnSubmit } from './BtnSubmit.interface';

const BtnSubmit: React.FC<IBtnSubmit> = ({ content, disabled }) => {
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
