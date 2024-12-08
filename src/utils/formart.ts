export const accentRemover = (text: string): string => {
    const root: string = '/';
    const path: string = root.concat(
        text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f\s]/g, ''),
    );
    if (path === root.concat('inicio')) return root;
    return path;
}