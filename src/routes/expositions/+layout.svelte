<script>
	import { page } from '$app/stores';

	import { Content } from '$lib';

	const { exhibitions } = $page.data;
</script>

<Content>
	<h1>expositions</h1>
	<!-- <ul class='grid'>
		{#each gallery as { image, caption = '' }}
			<li>
				<img src={image} alt={caption} />
			</li>
		{/each}
	</ul> -->
</Content>

<style lang='scss'>
	h1 {
		color: $lavender;
	}

	// .grid {
	// 	width: 100%;
	// 	margin-top: 1rem;
	// 	display: grid;
	// 	grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
	// 	gap: 1rem;

	// 	@include xs {
	// 		grid-template-columns: repeat(2, 1fr);
	// 	}

	// 	li {
	// 		img {
	// 			display: block;
	// 			width: 100%;
	// 		}
	// 	}
	// }
</style>