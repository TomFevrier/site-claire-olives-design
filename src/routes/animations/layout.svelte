<script>
	import { Content } from '$lib';

	export let animations;
</script>

<Content>
	<h1>animations</h1>
	<ul class='grid'>
		{#each animations as animation}
			{@const videoId = animation.url.match(/[0-9]{6,9}/)}
			{#if videoId}
				<li title={animation.title}>
					<iframe title={animation.title} src='https://player.vimeo.com/video/{videoId}'></iframe>
				</li>
			{/if}
		{/each}
	</ul>
</Content>

<style lang='scss'>
	h1 {
		color: $blue;
	}

	.grid {
		width: 100%;
		max-width: 16rem;
		margin-top: 1rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;

		li {
			iframe {
				display: block;
				border: none;
				width: 100%;
				aspect-ratio: 1;
			}
		}
	}
</style>