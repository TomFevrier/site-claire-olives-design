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
			<img src={image} alt='Claire Olivès' />
			<figcaption>{caption}</figcaption>
		</figure>
	</header>
	
	<article>
		<h2>{title}</h2>
		<slot />
	</article>
</Content>

<style lang='scss'>
	:global {
		body {
			color: white;
			background-color: $orange;
		}

		footer {
			p {
				color: whitesmoke !important;

				a {
					color: white !important;
				}
			}
		}

		@include md {
			.logo {
				background-color: rgba($orange, 0.9) !important;
			}
		}
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

		@include md {
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
</style>