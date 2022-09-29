<script>
	import { page } from '$app/stores';

	import { Content } from '$lib';

	const {
		title,
		cover,
		models
	} = $page.data;
</script>

<Content>
	<h1>{title}</h1>
	<article>
		<slot />
		<ul class='models'>
			{#each models as model}
				<li class='model'>
					<h3>{model.title}</h3>
					<p>{model.description}</p>
					<img src={model.cover} alt={model.title} />
				</li>
			{/each}
		</ul>
	</article>
	
</Content>

<style lang='scss'>
	h1 {
		color: $purple;
		text-transform: lowercase;
	}

	.models {
		width: 100%;

		.model {


			img {
				display: block;
				width: 100%;
			}
		}
	}
</style>
