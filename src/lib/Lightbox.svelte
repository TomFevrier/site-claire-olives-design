<script>
	import { createEventDispatcher } from 'svelte';
	import { scale, fade } from 'svelte/transition'

	import { Image } from '$lib';

	export let image;
	export let caption;

	const dispatch = createEventDispatcher();
</script>

<div class='lightbox' on:click={() => dispatch('close')} transition:fade={{ duration: 150 }}>
	<div class='content' on:click|stopPropagation in:scale={{ duration: 300 }}>
		<Image src={image} size={640} alt={caption || ''} />
		{#if caption}
			<p class='caption'>{caption}</p>
		{/if}
	</div>
</div>

<style lang='scss'>
	.lightbox {
		position: fixed;
		inset: 0;
		background-color: rgba($background, 0.8);
		backdrop-filter: blur(5px);
		z-index: 42;

		display: flex;
		justify-content: center;
		align-items: center;

		.content {
			width: 32rem;
			max-width: 90%;

			.caption {
				font-size: 0.9rem;
				margin: 0.5rem 0;
			}
		}

		@include xs {
			display: none;
		}
	}
</style>