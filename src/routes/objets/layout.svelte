<script>
	export let title;
	export let cover;
	export let models;
</script>

<h1>{title}</h1>
<img src={cover} />
<slot />
<ul>
	{#each models as model}
		<li>
			<h3>{model.title}</h3>
			<h4>{model.description}</h4>
			<img src={model.cover} />
		</li>
	{/each}
</ul>
