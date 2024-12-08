import React, { ReactNode } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Context } from './Context';
interface ParamsGlobal {
    children: ReactNode;
}


const Global: React.FC<ParamsGlobal> = ({ children }) => {
    return (
        <Context.Provider
            value={{
                images: [
                    {
                        title: 'aneis',
                        url: '/images/aneis.jpg',
                    },
                    {
                        title: 'bad',
                        url: '/images/bad.jpg',
                    },
                    {
                        title: 'dark',
                        url: '/images/dark.jpg',
                    },
                    {
                        title: 'game',
                        url: '/images/game.jpg',
                    },
                    {
                        title: 'pinguim',
                        url: '/images/Pinguim.jpg',
                    },
                    {
                        title: 'quarta',
                        url: '/images/quarta.jpg',
                    },
                    {
                        title: 'saul',
                        url: '/images/saul.jpg',
                    },
                    {
                        title: 'sopranos',
                        url: '/images/sopranos.jpg',
                    },
                    {
                        title: 'string',
                        url: '/images/string.jpg',
                    },
                    {
                        title: 'the last',
                        url: '/images/the_last.jpg',
                    },
                    {
                        title: 'witcher',
                        url: '/images/witcher.jpg',
                    },
                    {
                        title: 'lost',
                        url: '/images/lost.jpg',
                    },
                    {
                        title: 'office',
                        url: '/images/office.jpg',
                    },
                ],
                menu: ['Inicio', 'Registro', 'Suporte'],
                title: 'Cubo Series',
            }}
        >
            <BrowserRouter>
                <Routes>{children}</Routes>
            </BrowserRouter>
        </Context.Provider>
    );
};

export default Global;
