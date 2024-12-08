import React from 'react';
import Header from '../../components/Header/Header';
import { Context, ValuesParams } from '../../hooks/Gobal';
import Card from '../../components/Card/Card';
import style from './Home.module.css';

const Home: React.FC = () => {
    const { menu, title, images } = React.useContext(Context) as ValuesParams;
    return (
        <>
            <Header menu={menu} title={title} />
            <main>
                <div className={style.container_card}>
                    {images.map(({ url, title }) => (<Card key={title} title={title} url={url} />))}
                </div>
            </main>
        </>
    )
}

export default Home;