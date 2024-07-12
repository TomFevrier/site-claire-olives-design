<script>
	import { page } from '$app/stores';

	import { Content, Image } from '$lib';
	import { prettifyText } from '$lib/utils';

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
						<Image src={model.zenithal_view} size={400} alt='' />
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
		color: $blue;
		text-transform: lowercase;
	}

	article {
		color: $blue;
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
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: 1fr 8rem 1fr;
			grid-template-areas:
				"a a b b"
				"a a d d"
				"c c d d";

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
					background-color: #CACAFF;
					z-index: -1;
				}

				:global(img) {
					transform: scale(1.2);
				}
			}

			article {
				grid-area: b;
				padding: 2rem 2rem 2rem 4rem;
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
				justify-content: center;
				align-items: center;
				position: relative;

				&::before {
					content: "";
					position: absolute;
					inset: 0;
					background-color: #CACAFF;
					z-index: -1;
				}
			}

			@include md {
				grid-template-rows: 1fr 4rem 1fr;

				.cover {
					:global(img) {
						transform: none;
					}
				}

				article {
					padding-left: 2rem;
				}
			}

			@include sm {
				display: flex;
				flex-wrap: wrap;

				article {
					padding: 0;
					margin: 1rem 0;
				}

				.zenithal-view, .lateral-view {
					width: 50%;
				}
			}
		}
	}
</style>