<script>
	import { Logo } from '$lib';

	export let data;
	
	$: ({ objects } = data);
</script>

<Logo />
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
							<img src={model.cover} />
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
				color: $orange;
			}

			&:nth-child(2) {
				color: $blue;
			}

			&:nth-child(3) {
				color: $lavender;
			}

			&:nth-child(4) {
				color: $purple;
			}

			&:nth-child(5) {
				color: $red;
			}

			&:nth-child(6) {
				color: $orange;
			}
		}
	}
</style>