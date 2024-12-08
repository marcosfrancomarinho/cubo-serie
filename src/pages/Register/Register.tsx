import React from 'react';
import Header from '../../components/Header/Header';
import { Context, ValuesParams } from '../../hooks/Context';
import Footer from '../../components/Footer/Footer';
import RegisterForm from '../../components/Form/RegisterForm';

const Register: React.FC = () => {
    const { menu, title } = React.useContext(Context) as ValuesParams;
    return (
        <>
            <Header menu={menu} title={title} />
            <main>
                <RegisterForm />
            </main>
            <Footer />
        </>
    );
};
export default Register;
