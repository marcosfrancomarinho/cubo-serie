export function setTokenLocalStorage(token: string | undefined): void {
	if (!token || token.length === 0) return;
	window.localStorage.setItem('token', token);
}

export function getTokenLocalStorage(): string | null {
	const token: string | null = window.localStorage.getItem('token');
	if (!token || token.length === 0) return null;
	return token;
}

export function setNameLocalStorage(name: string | undefined): void {
	if (!name || name.length === 0) return;
	window.localStorage.setItem('name', name);
}

export function getNameLocalStorage(): string | null {
	const name: string | null = window.localStorage.getItem('name');
	if (!name || name.length === 0) return null;
	return name;
}
