import React from 'react';
import Header from '../../components/Header/Header';
import { Context, ValuesParams } from '../../hooks/Context';

const Register: React.FC = () => {
    const { menu, title } = React.useContext(Context) as ValuesParams;
    return (
        <>
            <Header menu={menu} title={title} />
            <h1>Esta e pagina de registro</h1>
        </>
    );
};
export default Register;
