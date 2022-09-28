export async function load({ routeId }) {
	const slug = routeId.split('/')[1]
	const page = await import(`./${slug}/+page.md`);  
	return page.metadata;
}