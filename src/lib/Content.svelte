<main>
	<slot />
</main>

<style lang='scss'>
	main {
		width: 100%;
		max-width: 36rem;
		margin: 10rem auto 0;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		@include sm {
			margin-top: 8rem;
		}
	}
</style>