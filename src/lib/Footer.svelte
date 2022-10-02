<footer>
	<p>© claire olivès • {new Date().getFullYear()}</p>
	<p>développé par <a href='https://tomfevrier.io' target='_blank'>tom février</a></p>
</footer>

<style lang='scss'>
	footer {
		position: fixed;
		bottom: 0;
		right: 0;
		padding: 1rem;

		p {
			font-size: 0.9rem;
			color: var(--footer-text-color, grey);
			margin: 0;
			text-align: right;

			a {
				color: var(--footer-text-color-accent, dimgrey);
			}
		}

		@include lg {
			position: relative;

			p {
				text-align: center;
			}
		}
	}
</style>
