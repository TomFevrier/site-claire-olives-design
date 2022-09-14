<script>
	export let animations;
</script>

<ul class='grid'>
	{#each animations as animation}
		{@const videoId = animation.url.match(/[0-9]{6,9}/)}
		{#if videoId}
			<li>
				<iframe title={animation.title} src='https://player.vimeo.com/video/{videoId}'></iframe>
			</li>
		{/if}
	{/each}
</ul>

<style>
	.grid {
		display: grid;
		width: 100%;
		max-width: 16rem;
		grid-template-columns: repeat(2, 1fr);
	}

	iframe {
		display: block;
		border: none;
		width: 100%;
		aspect-ratio: 1;
	}
</style>