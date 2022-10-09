<script>
	import { page } from '$app/stores';

	import { Content } from '$lib';

	const {
		title,
		caption,
		image
	} = $page.data;
</script>

<svelte:head>
	<style>
		:root {
			--background-color: #FF7B00;
			--text-color: white;
			--footer-text-color: whitesmoke;
			--footer-text-color-accent: white;
		}
	</style>
</svelte:head>

<Content>
	<header>
		<h1>about</h1>
		<figure id='portrait'>
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
	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin: 2rem 0;

		h1 {
			margin: 0;
		}

		#portrait {
			position: relative;
			margin-right: 1rem;

			img {
				width: 10rem;
			}

			figcaption {
				position: absolute;
				bottom: 0;
				left: 100%;
				transform: translateY(100%) rotate(-90deg);
				transform-origin: top left;
				white-space: nowrap;
				margin: 0;
				color: whitesmoke;
			}
		}

		@include md {
			flex-direction: column;
			align-items: center;

			#portrait {
				margin: 4rem 0 1rem;

				img {
					width: 8rem;
				}
			}
		}
	}
</style>