export async function load() {
	const page = await import('./+page.md');  
	return page.metadata;
}