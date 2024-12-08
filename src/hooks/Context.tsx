import React from 'react';

export interface ValuesParams {
    title: string;
    menu: string[];
    images: {
        url: string;
        title: string;
    }[];
}

export const Context = React.createContext<ValuesParams | null>(null);
