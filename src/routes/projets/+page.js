export async function load() {
	const allProjectFiles = import.meta.glob('/src/routes/projets/*/+page.md');
	
	const allProjects = await Promise.all(
		[...Object.entries(allProjectFiles)].map(async ([path, resolver]) => {
			console.log()
			const { metadata } = await resolver();
			console.log(path)
	
			return {
				meta: metadata,
				path: path.slice(11, -8)
			};
		})
	);

	return {
		projects: allProjects
	};
}