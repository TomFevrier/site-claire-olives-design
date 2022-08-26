<script>
	export let data;

	console.log(data.projects)
</script>

<h1>Projets</h1>
<ul>
	{#each data.projects as project}
		<li>
			<a href={project.path}>
				{project.meta.title}
			</a>
		</li>
	{/each}
</ul>

<style lang='scss'>
	h3 {
		margin: 0;
	}
</style>