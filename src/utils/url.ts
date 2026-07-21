export function withBase(path: string) {
	const base = import.meta.env.BASE_URL.endsWith('/')
		? import.meta.env.BASE_URL
		: `${import.meta.env.BASE_URL}/`;
	const relativePath = path.replace(/^\/+/, '');
	return new URL(relativePath, `https://example.com${base}`).pathname;
}