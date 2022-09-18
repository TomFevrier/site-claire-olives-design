export const csr = true;

export async function load() {
	const allObjectFiles = import.meta.glob('/src/routes/objets/*/+page.md');

	const featuredFile = await import('./featured.md');  

	const allObjects = await Promise.all(
		[...Object.entries(allObjectFiles)].map(async ([path, resolver]) => {
			const { metadata } = await resolver();
	
			return {
				meta: metadata,
				path: path.slice(11, -8)
			};
		})
	);

	return {
		featured: featuredFile.metadata,
		objects: allObjects
	};
}