<script>
	import { page } from '$app/stores';

	import { Content, Image, Lightbox } from '$lib';

	const { gallery } = $page.data;

	let isLightboxOpen = false;
	let enlargedItem = null;

	const openLightbox = (item) => {
		enlargedItem = item;
		isLightboxOpen = true;
	}

	const closeLightbox = () => {
		enlargedItem = null;
		isLightboxOpen = false;
	}
</script>

<Content>
	<h1>vrac</h1>
	<ul class='grid'>
		{#each gallery as item}
			<li class='image' on:click={() => openLightbox(item)}>
				<Image src={item.image} size={400} alt={item.caption || ''} />
				{#if item.caption}
					<p class='caption'>{item.caption}</p>
				{/if}
			</li>
		{/each}
	</ul>
</Content>
{#if isLightboxOpen}
	<Lightbox {...enlargedItem} on:close={closeLightbox} />
{/if}

<style lang='scss'>
	h1 {
		color: $red;
	}

	.grid {
		width: 100%;
		margin-top: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
		gap: 1rem;

		@include xs {
			grid-template-columns: 1fr;
		}

		.image {
			background-color: $red;
			position: relative;
			overflow: hidden;
			cursor: pointer;

			:global(img) {
				transition: all 300ms ease-out;
			}

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
				:global(img) {
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