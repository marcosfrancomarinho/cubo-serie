import React from "react";
import { ValuesParams } from "./Context";

export function useFetch(url: string): ValuesParams | null {
	const [datas, setDatas] = React.useState<ValuesParams | null>(null);
	React.useMemo(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => setDatas(json))
			.catch(() => setDatas(null));
	}, [url]);
	return datas;
}
