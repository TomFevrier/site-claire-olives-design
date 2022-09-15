<script>
	import { Logo } from '$lib';

	import '../app.css';
</script>

<Logo />
<slot />

<style lang='scss'>	
	:global(h1) {
		font-family: 'supersize-bk-box', sans-serif;
		font-size: 1.8rem;
		text-align: center;

		@include sm {
			font-size: 1.5rem;
		}
	}
</style>