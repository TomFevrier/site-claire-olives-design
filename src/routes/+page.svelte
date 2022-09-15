<script>
	import { Menu } from '$lib';

	export let data;
	
	$: ({ objects } = data);
</script>

<!-- <h1>claire olivès</h1> -->

<Menu />

<main>
	<ul>
		{#each objects as object}
			<li>
				<a href={object.path}>
					<ul class='gallery'>
						{#each object.meta.models as model}
							<li class='model'>
								<h3>{object.meta.title}</h3>
								<h4>{model.title}</h4>
								<img src={model.cover} />
							</li>
						{/each}
					</ul>
				</a>
			</li>
		{/each}
	</ul>
</main>

<style lang='scss'>
	main {
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		padding: 1rem;

		ul {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}

		.gallery {
			display: flex;
			flex-direction: row;
			gap: 2rem;

			.model {
				h3 {
					margin: 0;
					font-size: 0.9rem;
				}

				h4 {
					margin: 0;
					font-size: 1rem;
					text-transform: uppercase;
				}
			}
		}

		img {
			width: 6rem;
		}
	}
</style>