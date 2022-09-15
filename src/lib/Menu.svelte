<nav>
	<ul>
		<li>
			<a href='/about'>about</a>
		</li>
		<li>
			<a href='/animations'>animations</a>
		</li>
		<li>
			<a href='/expositions'>expositions</a>
		</li>
		<li>
			<a href='/archives'>archives</a>
		</li>
		<li>
			<a href='/vrac'>vrac</a>
		</li>
		<li>
			<a href='/contact'>contact</a>
		</li>
	</ul>
	<a href='https://www.instagram.com/claire_olives/'>
		<i class='fi fi-instagram'></i>
	</a>
</nav>


<style lang='scss'>
	nav {
		position: fixed;
		left: 3rem;
		top: 10rem;

		ul {
			margin: 1rem 0 2rem;

			li {
				font-family: 'supersize-bk-box', sans-serif;
				font-size: 1.1rem;

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

				&:hover {
					color: black;
				}
			}
		}

		.fi-instagram {
			font-size: 2.5rem;
			color: $blue;
		}
	}
</style>