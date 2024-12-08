import React from 'react';
import Header from '../../components/Header/Header';
import { Context, ValuesParams } from '../../hooks/Context';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/Form/LoginForm';

const Login: React.FC = () => {
    const { menu, title, footer } = React.useContext(Context) as ValuesParams;
    return (
        <>
            <Header menu={menu} title={title} />
            <main>
                <LoginForm />
            </main>
            <Footer footer={footer} />
        </>
    );
};
export default Login;
