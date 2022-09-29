<script>
	import { page } from '$app/stores';

	import { Content } from '$lib';

	const { title, models } = $page.data;
</script>

<svelte:head>
	<style>
		:root {
			--background-color: #D7D7FF;
		}
	</style>
</svelte:head>

<Content>
	<h1>{title}</h1>
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
		color: $blue;
		text-transform: lowercase;
	}

	article {
		color: $blue;
		
		:global {
			strong {
				font-size: 1.2rem;
			}

			em {
				font-size: 0.9rem;
			}
		}
		
	}

	.grid {
		width: 100%;
		max-width: 24rem;
		margin-top: 1rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
</style>