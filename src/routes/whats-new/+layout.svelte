<script>
	import { page } from '$app/stores';

	import { Content, Image, VideoEmbed } from '$lib';
	import { prettifyText } from '$lib/utils';

	const { collections } = $page.data;
</script>

<svelte:head>
	<style>
		:root {
			--background-color: #D0D9E8;
		}
	</style>
</svelte:head>
<Content>
	<h1>what’s new</h1>
	<ul class='collections'>
		{#each collections as collection}
			<li class='collection'>
				<h2 class='title'>
					{@html prettifyText(collection.title)}
				</h2>
				<p class='description'>
					{@html prettifyText(collection.description)}
				</p>
				{#if collection.image}
					<figure class='cover'>
						<Image src={collection.image} size={800} alt='' />
						{#if collection.caption}
							<figcaption>{collection.caption}</figcaption>
						{/if}
					</figure>
				{/if}
				<ul class='models'>
					{#each collection.models as model}
						<li class='model'>
							<Image src={model.cover} size={800} alt='' />
							<article>
								<h2 class='model-title'>
									{model.title}
								</h2>
								<p class='model-dimensions'>
									{@html prettifyText(model.dimensions)}
								</p>
								<p class='model-description'>
									{@html prettifyText(model.description)}
								</p>
							</article>
						</li>
					{/each}
				</ul>
				{#if collection.video}
					<figure class='video'>
						<VideoEmbed title={collection.caption} url={collection.video} />
						{#if collection.caption}
							<figcaption>{collection.caption}</figcaption>
						{/if}
					</figure>
				{/if}
			</li>
		{/each}
	</ul>
</Content>

<style lang='scss'>
	h1 {
		color: $green;
	}

	.collections {
		display: flex;
		flex-direction: column;
		gap: 4rem;
		width: 100%;

		color: $green;

		.collection {
			display: flex;
			flex-direction: column;

			.title {
				font-size: 1.5rem;
				text-transform: uppercase;
			}

			.description {
				margin: 1rem 0;
			}

			.cover, .video {
				margin-top: 2rem;
			}

			.models {
				display: flex;
				flex-direction: column;
				gap: 2.5rem;
				margin: 2rem 0;

				.model {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					align-items: end;
					gap: 1rem;

					article {
						.model-title {
							font-size: 1.5rem;
							text-transform: uppercase;
							margin: 0;
						}

						.model-dimensions {
							margin-bottom: 1rem;
						}

						.model-description {
							margin: 0;
							font-size: 0.9rem;
							font-weight: normal;
						}
					}

					@include md {
						display: flex;
						flex-direction: column;
						align-items: flex-start;

						:global(img) {
							max-width: 512px;
						}
					}
				}
			}
		}
	}
</style>