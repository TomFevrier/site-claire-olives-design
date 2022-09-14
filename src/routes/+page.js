export async function load() {
	const allObjectFiles = import.meta.glob('/src/routes/objets/*/+page.md');

	const allObjects = await Promise.all(
		[...Object.entries(allObjectFiles)].map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			console.log(path)
	
			return {
				meta: metadata,
				path: path.slice(11, -8)
			};
		})
	);

	return {
		objects: allObjects
	};
}