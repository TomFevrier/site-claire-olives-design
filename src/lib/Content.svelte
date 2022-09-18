<main>
	<slot />
</main>

<style lang='scss'>
	main {
		width: 100%;
		max-width: 48rem;
		margin: 10rem auto 1rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;

		@include md {
			margin-top: 8rem;
		}
	}
</style>