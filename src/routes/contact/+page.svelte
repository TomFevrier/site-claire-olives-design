<script>
	import { Content } from '$lib';
</script>

<Content>
	<h1>contact</h1>
	<a href='mailto:angelapigerouletbecker@gmail.com'>
		<i class='fi fi-email'></i>
	</a>
</Content>

<style lang='scss'>
	h1 {
		color: $orange;
	}

	.fi-email {
		text-align: center;
		font-size: 16rem;
		color: $orange;
		margin: 2rem 0;

		@include sm {
			font-size: 10rem;
		}
	}
</style>