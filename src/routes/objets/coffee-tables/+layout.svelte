<script>
	import { page } from '$app/stores';

	import { Content, Image } from '$lib';
	import { prettifyText } from '$lib/utils';

	const { title, models } = $page.data;
</script>

<svelte:head>
	<style>
		:root {
			--background-color: #D0D9E8;
		}
	</style>
</svelte:head>

<Content>
	<h1>{title}</h1>
	<article>
		<slot />
	</article>
	<ul class='models'>
		{#each models as model}
			<li class='model'>
				<figure class='cover'>
					<Image src={model.cover} size={480} alt='' />
				</figure>
				<article>
					<h2 class='title'>
						{model.title}
					</h2>
					<h3 class='subtitle'>
						{model.subtitle}
					</h3>
					{#if model.description}
						<p class='description'>
							{@html prettifyText(model.description)}
						</p>
					{/if}
				</article>
				{#if model.zenithal_view}
					<figure class='zenithal-view'>
						<Image src={model.zenithal_view} size={256} alt='' />
					</figure>
				{/if}
				{#if model.lateral_view}
					<figure class='lateral-view'>
						<Image src={model.lateral_view} size={400} alt='' />
					</figure>
				{/if}
			</li>
		{/each}
	</ul>
</Content>

<style lang='scss'>
	h1 {
		color: $olive;
		text-transform: lowercase;
	}

	article {
		color: $olive;
		text-align: left;
		
		:global {
			strong {
				font-size: 1.2rem;
				font-weight: inherit;
			}

			em {
				font-size: 0.9rem;
			}
		}
	}

	.models {
		display: flex;
		flex-direction: column;
		gap: 6rem;
		margin: 4rem 0;

		.model {
			display: grid;
			grid-template-columns: 1fr 6rem 1fr 1fr;
			grid-template-areas:
				"a a b b"
				"c d d d";

			.cover {
				grid-area: a;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;

				&::before {
					content: "";
					position: absolute;
					inset: 0;
					background-color: #E6EBF3;
					z-index: -1;
				}

				:global(img) {
					transform: translateX(4rem);
				}
			}

			article {
				grid-area: b;
				padding: 2rem 2rem 2rem 6rem;
				width: 100%;

				.title {
					font-size: 1.6rem;
					text-transform: uppercase;
					margin: 0;
				}

				.subtitle {
					font-size: 1.3rem;
					text-transform: none;
					font-weight: inherit;
					margin: 0;
				}

				.description {
					font-size: 1rem;
					font-style: italic;
					margin: 2rem 0;
				}
			}

			.zenithal-view {
				grid-area: c;
				display: flex;
				justify-content: center;
				align-items: center;

				:global(img) {
					max-width: 16rem;
				}
			}

			.lateral-view {
				grid-area: d;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				position: relative;

				&::before {
					content: "";
					position: absolute;
					inset: 0;
					background-color: #E6EBF3;
					z-index: -1;
				}

				:global(img) {
					max-width: 24rem;
					padding: 1rem 2rem;
				}
			}

			@include md {
				grid-template-columns: 1fr 1fr 4rem 1fr 1fr;
				grid-template-areas:
					"a a a b b"
					"c c d d d";

				.cover {
					:global(img) {
						transform: none;
					}
				}

				article {
					padding-left: 2rem;
				}

				.lateral-view {
					justify-content: center;
				}
			}

			@include sm {
				display: flex;
				flex-wrap: wrap;

				article {
					padding: 0;
					margin-top: 1rem;
				}

				.zenithal-view {
					width: 33%;
				}

				.lateral-view {
					width: 66%;

					:global(img) {
						padding: 1rem;
					}
				}
			}
		}
	}
</style>