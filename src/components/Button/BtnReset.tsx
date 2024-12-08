import React from 'react';
import style from './Btn.module.css';
interface ParamsBtnReset {
    content: string;
}

const BtnReset: React.FC<ParamsBtnReset> = ({ content }) => {
    return (
        <button
            className={`
            ${style.btn}
            ${style.btn_reset}`}
            type="reset"
        >
            {content}
        </button>
    );
};
export default BtnReset;
