import React from 'react';

export interface ValuesParams {
    title: string;
    menu: string[];
    images: {
        url: string;
        title: string;
    }[];
    footer: {
        url: string;
        redes: string;
        id: number;
    }[];
}

export const Context = React.createContext<ValuesParams | null>(null);
