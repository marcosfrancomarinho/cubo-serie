import React, { ReactNode } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Context, ValuesParams } from './Context';

interface ParamsGlobal {
    children: ReactNode;
}

const Global: React.FC<ParamsGlobal> = ({ children }) => {
    const [datas, setDatas] = React.useState<ValuesParams | null>(null);
    React.useEffect(() => {
        fetch('/json/db.json')
            .then((res) => res.json())
            .then((json) => setDatas(json));
    }, []);
    if (datas) {
        return (
            <Context.Provider
                value={{
                    images: datas.images,
                    menu: datas.menu,
                    title: datas.title,
                }}
            >
                <BrowserRouter>
                    <Routes>{children}</Routes>
                </BrowserRouter>
            </Context.Provider>
        );
    }
    return null;
};

export default Global;
