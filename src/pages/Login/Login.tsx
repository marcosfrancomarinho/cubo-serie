import React from 'react';
import Header from '../../components/Header/Header';
import { Context, ValuesParams } from '../../hooks/Context';
import Footer from '../../components/Footer/Footer';

const Login: React.FC = () => {
    const { menu, title } = React.useContext(Context) as ValuesParams;
    return (
        <>
            <Header menu={menu} title={title} />
            <main></main>
            <Footer />
        </>
    );
};
export default Login;
