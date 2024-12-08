import React from "react";
import { ValuesParams } from "../hooks/Context";


export function useFetch(url: string): ValuesParams | null {
    const [datas, setDatas] = React.useState<ValuesParams | null>(null);
    React.useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => setDatas(json));
    }, []);
    return datas;
}

