<script>
	import { page } from '$app/stores';

	import { Content } from '$lib';

	const {
		title,
		caption,
		image
	} = $page.data;
</script>

<Content>
	<header>
		<h1>about</h1>
		<figure>
			<img src={image} />
			<figcaption>{caption}</figcaption>
		</figure>
	</header>
	
	<article>
		<h2>{title}</h2>
		<slot />
	</article>
</Content>

<style lang='scss'>
	:global(body) {
		color: white;
		background-color: $orange;
	}

	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin: 2rem 0;

		h1 {
			margin: 0;
		}

		figure {
			position: relative;
			margin-right: 1rem;

			img {
				width: 10rem;
			}

			figcaption {
				position: absolute;
				bottom: 0;
				left: 100%;
				transform: rotate(-90deg);
				transform-origin: top left;
				font-size: 0.8rem;
				white-space: nowrap;
			}
		}

		@include sm {
			flex-direction: column;
			align-items: center;

			figure {
				margin: 1rem 0;

				img {
					width: 8rem;
				}
			}
		}
	}

	article {
		text-align: justify;

		:global(h2) {
			font-size: 1.25rem;
			text-align: left;
			text-transform: uppercase;
		}

		:global(h3) {
			font-size: 1.1rem;
			text-align: left;
			text-transform: uppercase;
			margin: 0.25rem 0;
		}

		:global(p) {
			margin: 0 0 1.5rem;
			line-height: 110%;
		}

		:global(hr) {
			border: 1px solid white;
		}
	}
</style>