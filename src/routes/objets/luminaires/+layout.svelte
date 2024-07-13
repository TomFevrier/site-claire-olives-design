<script>
	import { page } from '$app/stores';

	import { Content, Image } from '$lib';
	import { prettifyText } from '$lib/utils';

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
	<article id='description'>
		{@html prettifyText(description)}
	</article>
	{#if images && images.length > 0}
		<figure class='cover'>
			<Image src={images[0].image} size={800} alt='' />
			{#if images[0].caption}
				<figcaption>{images[0].caption}</figcaption>
			{/if}
		</figure>
	{/if}
	<ul class='models'>
		{#each models.slice(0, 4) as model}
			<li class='model'>
				<article>
					<h2 class='title'>
						{model.title}
					</h2>
					<p class='dimensions'>
						{@html prettifyText(model.dimensions)}
					</p>
				</article>
				{#if model.lateral_view}
					<figure class='lateral-view'>
						<Image src={model.lateral_view} size={400} alt='' />
					</figure>
				{/if}
			</li>
		{/each}
	</ul>
	{#if images && images.length > 1}
		<figure class='cover'>
			<Image src={images[1].image} size={800} alt='' />
			{#if images[1].caption}
				<figcaption>{images[1].caption}</figcaption>
			{/if}
		</figure>
	{/if}
	<article>
		<slot />
	</article>
	<div id='bipolaire'>
		<div class='wrapper'>
			<div class='model'>
				<article>
					<h2 class='title'>
						{models.at(-1).title}
					</h2>
					<p class='dimensions'>
						{@html prettifyText(models.at(-1).dimensions)}
					</p>
				</article>
				{#if models.at(-1).lateral_view}
					<figure class='lateral-view'>
						<Image src={models.at(-1).lateral_view} size={400} alt='' />
					</figure>
				{/if}
			</div>
			{#if models.at(-1).description}
				<p class='description'>
					{models.at(-1).description}
				</p>
			{/if}
		</div>
		<figure class='cover'>
			<Image src={models.at(-1).cover} size={800} alt='' />
		</figure>
	</div>
</Content>

<style lang='scss'>
	h1 {
		color: $brown;
		text-transform: lowercase;
	}

	article {
		color: $brown;
		text-align: left;

		&#description {
			font-size: 1.2rem;
		}
		
		:global {
			strong {
				font-size: 1.2rem;
				font-weight: inherit;
			}

			em {
				font-size: 0.9rem;
				color: var(--text-color, black);
			}
		}
	}

	.models {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		justify-items: center;
		gap: 2rem;
		width: 100%;
	}

	.model {
		background-color: #E1E5F6;
		max-width: 24rem;
		aspect-ratio: 1;
		position: relative;

		article {
			position: absolute;
			bottom: 0;
			left: 0;
			padding: 1rem;

			h2 {
				font-size: 1.4rem;
				margin: 0.25rem 0;
			}

			p {
				margin: 0;
			}
		}
	
		.lateral-view {
			width: 100%;
		}
	}

	#bipolaire {
		margin-top: 6rem;

		.wrapper {
			display: flex;
			align-items: flex-end;
			gap: 1rem;

			.model {
				flex: 1;

				article {
					top: 0;
					bottom: auto;
				}
			}

			.description {
				flex: 1;
				margin: 0;
				color: $brown;
			}

			@include md {
				flex-direction: column;
				align-items: center;
			}
		}
	}
</style>