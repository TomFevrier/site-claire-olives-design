<script>
	import { page } from '$app/stores';

	import { Logo, Menu, Footer } from '$lib';

	import '../app.css';
	
	$: pageTitle = $page.routeId
		? [$page.routeId.split('/').at(-1), 'claire olivès design'].join(' • ')
		: 'claire olivès design';

</script>

<svelte:head>
	<title>
		{pageTitle}
	</title>

	<meta property='og:title' content={pageTitle} />
	<meta property='twitter:title' content={pageTitle} />
</svelte:head>
<Logo />
<Menu />
<slot />
<Footer />

<style lang='scss' global>
	body {
		color: var(--text-color, black);
		background-color: var(--background-color, $background);
	}

	h1 {
		font-family: 'supersize-bk-box', sans-serif;
		font-size: 1.8rem;
		text-align: center;
		margin: 1rem 0 5rem;

		@include sm {
			font-size: 1.5rem;
			margin-bottom: 2.5rem;
		}
	}

	article {
		text-align: justify;

		h2 {
			font-size: 1.25rem;
			text-align: left;
			text-transform: uppercase;
		}

		h3 {
			font-size: 1.1rem;
			text-align: left;
			text-transform: uppercase;
			margin: 0.25rem 0;
		}

		p {
			margin: 0 0 1.5rem;
			line-height: 110%;
		}

		hr {
			border: 1px solid white;
		}
	}
</style>