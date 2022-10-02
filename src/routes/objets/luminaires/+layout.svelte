<script>
	import { page } from '$app/stores';

	import { Content } from '$lib';

	const {
		title,
		description,
		images,
		models
	} = $page.data;
</script>

<svelte:head>
	<style>
		:root {
			--background-color: #E9EDF9;
		}
	</style>
</svelte:head>

<Content>
	<h1>{title}</h1>
	<article>
		{@html description}
	</article>
	<article>
		<slot />
	</article>
	<!-- <ul class='grid'>
		{#each animations as { title, url }}
			<li>
				<VideoEmbed {title} {url} />
			</li>
		{/each}
	</ul> -->
</Content>

<style lang='scss'>
	h1 {
		color: $brown;
		text-transform: lowercase;
	}

	article {
		font-size: 0.9rem;
		
		:global(strong) {
			color: $brown;
			font-size: 1.2rem;
		}
		
	}
</style>