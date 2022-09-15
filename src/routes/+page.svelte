<script>
	export let data;
	
	$: ({ objects } = data);
</script>

<h1>claire olivès</h1>

<nav>
	<ul>
		<li>
			<a href='/about'>about</a>
		</li>
		<li>
			<a href='/animations'>animations</a>
		</li>
		<li>
			<a href='/evenements'>evenements</a>
		</li>
		<li>
			<a href='/archives'>archives</a>
		</li>
		<li>
			<a href='/en-vrac'>en vrac</a>
		</li>
		<li>
			<a href='/contact'>contact</a>
		</li>
	</ul>
</nav>

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

<style lang='scss'>
	h1 {
		font-family: 'bc-alphapipe', sans-serif;
		// font-family: 'mamablock-210', sans-serif;
	}

	nav {
		font-family: 'supersize-bk-box', sans-serif;

		li {
			&:nth-child(1) {
				color: #E41A3F;
			}

			&:nth-child(2) {
				color: #1A171B;
			}

			&:nth-child(3) {
				color: #FFDE00;
			}

			&:nth-child(4) {
				color: #969799;
			}

			&:nth-child(5) {
				color: #E41A3F;
			}

			&:nth-child(6) {
				color: #10B4C0;
			}
		}
	}
</style>