<script>
	export let title;
	export let cover;
</script>
	
<article>
	<h1>{title}</h1>

	<img src={cover} />

	<slot />
</article>