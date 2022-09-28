<script>
	export let title;
	export let url;
	export let autoplay = false;
	export let loop = false;
	export let muted = false;

	$: videoId = url.match(/[0-9]{6,9}/);
</script>

{#if videoId}
	<iframe {title} src='https://player.vimeo.com/video/{videoId}?autoplay={+autoplay}&loop={+loop}&muted={+muted}'></iframe>
{/if}

<style lang='scss'>
	iframe {
		display: block;
		border: none;
		width: 100%;
		aspect-ratio: 1;
	}
</style>