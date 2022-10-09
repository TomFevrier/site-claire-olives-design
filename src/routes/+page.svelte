<script>
	import { MiniCarousel, VideoEmbed } from '$lib';

	export let data;
	
	$: ({ featured, carousels } = data);
</script>

<main>
	<ul class='galleries-layout'>
		{#each carousels as carousel}
			<li>
				<MiniCarousel {...carousel} />
			</li>
		{/each}
		{#each carousels as carousel}
			<li>
				<MiniCarousel {...carousel} />
			</li>
		{/each}
		<li>
			<MiniCarousel {...carousels[0]} />
		</li>
	</ul>
	{#if featured.image || featured.video}
		<section class='featured'>
			<h3>A la une</h3>
			<div class='container'>
				<p>{featured.content}</p>
				{#if featured.video}
					<VideoEmbed title='A la une' url={featured.video} autoplay loop muted />
				{:else if featured.image}
					<img src={featured.image} alt='A la une' />
				{/if}
			</div>
		</section>
	{/if}
</main>

<style lang='scss'>
	main {
		width: 100%;
		margin: 0 auto;
		padding: 2rem 3rem;
		flex: 1;
		overflow: hidden;
		position: relative;

		.galleries-layout {
			// max-height: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;

			li {
				min-width: 12rem;
				max-width: 20rem;
				height: 100%;
				filter: grayscale(100%);
				transition: filter 600ms ease-out;

				&:hover {
					filter: grayscale(0%);
				}

				&:nth-child(1) {
					margin-top: 80vh;
					transform: translateY(-50%);
				}

				&:nth-child(2) {
					margin-top: 60vh;
					transform: translateY(-50%);
				}

				&:nth-child(3) {
					margin-top: 40vh;
					transform: translateY(-50%);
				}

				&:nth-child(4) {
					margin-top: 20vh;
					transform: translateY(-50%);
				}

				&:nth-child(5) {
					margin-top: 0;
				}
			}
		}

		@include lg {
			padding: 2rem;
			padding-left: 16rem;
			overflow: visible;
			display: flex;
			flex-direction: column;
			align-items: center;

			.galleries-layout {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;
				gap: 4rem;

				li {
					margin-top: 0 !important;
					transform: none !important;
					filter: none;
					max-width: 28rem;
				}
			}
		}

		@include md {
			margin-top: 8rem;
			padding-left: inherit;
			padding: 1rem;
		}

		.featured {
			position: absolute;
			bottom: 4rem;
			right: 3rem;

			h3 {
				font-family: 'supersize-bk-box', sans-serif;
				font-size: 1.2rem;
				color: $red;
				margin: 0.5rem 0;
			}

			.container {
				display: flex;
				align-items: flex-end;
				width: 100%;
				max-width: 24rem;

				p {
					position: absolute;
					font-size: 0.9rem;
					text-align: right;
					max-width: 16rem;
					bottom: 0;
					left: 0;
					transform: translateX(calc(-100% - 2rem));
					color: grey;
					margin: 1rem;
				}
			}

			@include xl {
				.container {
					max-width: 16rem;
				}
			}

			@include lg {
				position: relative;
				bottom: auto;
				right: auto;
				margin-top: 6rem;

				.container {
					flex-direction: column-reverse;
					align-items: flex-start;
					max-width: 24rem;

					p {
						position: relative;
						text-align: left;
						transform: none;
						margin: 0.5rem 0;
						max-width: none;
					}
				}
			}
		}
	}
</style>