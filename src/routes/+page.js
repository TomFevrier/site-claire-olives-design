export const csr = true;

export async function load() {
	const featured = (await import('./featured.md')).metadata;
	const { carousels } = (await import('./carousels.md')).metadata;

	const allObjectFiles = import.meta.glob('/src/routes/objets/*/+page.md');
	const allObjects = await Promise.all(
		[...Object.entries(allObjectFiles)].map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			return metadata;
		})
	);

	const allModels = allObjects.reduce((models, object) => [...models, ...(object.models || [])], []);

	return {
		featured,
		carousels: carousels.map(({ path, models }) => {
			return {
				path,
				title: allObjects.find((object) => object.models?.some((model) => models[0] === model.title)).title_singular,
				models: models.map((title) => allModels.find((model) => model.title === title))
			};
		})
	};
}