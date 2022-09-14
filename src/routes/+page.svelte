<script>
	export let data;
	
	$: ({ objects } = data);
</script>

<h1>Claire Olivès</h1>

<ul>
	{#each objects as object}
		<li>
			<a href={object.path}>
				<h3>{object.meta.title}</h3>
				<ul>
					{#each object.meta.models as model}
						<li>
							<h4>{model.title}</h4>
							<h5>{model.description}</h5>
							<img src='uploads/{model.cover}' />
						</li>
					{/each}
				</ul>
			</a>
		</li>
	{/each}
</ul>