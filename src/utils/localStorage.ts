export function setTokenLocalStorage(token: string): void {
	if (!token || token.length === 0) return;
	window.localStorage.setItem('token', token);
}

export function getTokenLocalStorage(): string | null {
	const token: string | null = window.localStorage.getItem('token');
	if (!token || token.length === 0) return null;
	return token;
}
