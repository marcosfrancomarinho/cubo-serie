export const accentRemover = (text: string): string => {
	const root: string = '/';
	const path: string = root.concat(
		text
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f\s]/g, ''),
	);
	if (path === root.concat('home')) return root;
	return path;
};

export function getFirstName(nameFull: string): string {
	return nameFull.split(' ')[0].toUpperCase();
}
