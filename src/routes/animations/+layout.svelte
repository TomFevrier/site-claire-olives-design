<script>
	import { page } from '$app/stores';

	import { Content, VideoEmbed } from '$lib';

	const { animations } = $page.data;
</script>

<Content>
	<h1>animations</h1>
	<ul class='grid'>
		{#each animations as { title, url }}
			<li>
				<VideoEmbed {title} {url} />
			</li>
		{/each}
	</ul>
</Content>

<style lang='scss'>
	h1 {
		color: $blue;
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