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
					<h3>{object.meta.title}</h3>
					<ul class='gallery'>
						{#each object.meta.models as model}
							<li>
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

		.gallery {
			display: flex;
			gap: 1rem;
		}

		img {
			width: 6rem;
		}
	}
</style>