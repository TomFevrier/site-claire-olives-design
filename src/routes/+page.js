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

	const allModels = allObjects.reduce((previousModels, object) => {
		if (!object.models || object.models.length === 0) return previousModels;

		const models = object.models[0].cover
			? object.models
			: object.models.reduce((previousVariants, model) => [...previousVariants, ...(model.variants || [])], []);

		return [
			...previousModels,
			...models
		];
	}, []);

	return {
		featured,
		carousels: carousels.map(({ path, models }) => {
			// Luminaires
			if (models.length === 1) {
				const model = allObjects.find((object) => object.title === 'Luminaires').models.find((model) => models[0] === model.title);
				return {
					path,
					title: 'Lampe',
					models: model.variants.map((variant) => ({ ...variant, title: model.title }))
				};
			}

			// Autres objets
			return {
				path,
				title: allObjects.find((object) => object.models?.some((model) => models[0] === model.title)).title_singular,
				models: models.map((title) => allModels.find((model) => model.title === title))
			};
		})
	};
}