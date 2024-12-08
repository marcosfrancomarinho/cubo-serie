import React, { ReactNode } from 'react';
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
                {children}
            </Context.Provider>
        );
    }
    return null;
};

export default Global;
