<script>
	import { page } from '$app/stores';

	import { Content, VideoEmbed } from '$lib';

	const { animations } = $page.data;
</script>

<Content>
	<h1>animations</h1>
	<ul class='grid'>
		{#each animations as { title, url, caption }}
			<li class='animation'>
				<VideoEmbed {title} {url} />
				{#if caption}
					<p class='caption'>{caption}</p>
				{/if}
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

		.animation {
			position: relative;
			background-color: $blue;
			overflow: hidden;
			transition: background 300ms ease-out;

			.caption {
				position: absolute;
				bottom: -1rem;
				left: 0;
				margin: 0;
				padding: 0.5rem;
				font-size: 0.9rem;
				color: black;
				opacity: 0;
				transition: all 300ms ease-out;
			}

			&:hover {
				background: linear-gradient($blue, $blue 50%, white);

				:global(iframe) {
					filter: grayscale(100%) contrast(200%);
					mix-blend-mode: screen;
				}

				.caption {
					bottom: 0;
					opacity: 1;
				}
			}
		}
	}
</style>