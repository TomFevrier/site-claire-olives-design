<script>
	import { page } from '$app/stores';

	import { Content } from '$lib';

	const { gallery } = $page.data;
</script>

<Content>
	<h1>vrac</h1>
	<ul class='grid'>
		{#each gallery as { image, caption = '' }}
			<li class='image'>
				<img src={image} alt={caption} />
				<p class='caption'>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
			</li>
		{/each}
	</ul>
</Content>

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

			img {
				display: block;
				width: 100%;
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
				img {
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