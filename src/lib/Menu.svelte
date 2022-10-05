<script>
	let isMenuVisible = false;
</script>

<nav class:active={isMenuVisible}>
	<div class='burger' on:click={() => isMenuVisible = !isMenuVisible}>
		<div class='burger-line'></div>
	</div>
	<ul>
		<li>
			<a href='/about' data-sveltekit-prefetch>
				about
			</a>
		</li>
		<li>
			<a href='/animations' data-sveltekit-prefetch>
				animations
			</a>
		</li>
		<li>
			<a href='/events' data-sveltekit-prefetch>
				events
			</a>
		</li>
		<li>
			<a href='/archives' data-sveltekit-prefetch>
				archives
			</a>
		</li>
		<li>
			<a href='/vrac' data-sveltekit-prefetch>
				vrac
			</a>
		</li>
		<li>
			<a href='/contact' data-sveltekit-prefetch>
				contact
			</a>
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
		overflow: hidden;
		z-index: 999;

		display: flex;
		flex-direction: column;

		ul {
			display: flex;
			flex-direction: column;
			margin: 1rem 0 2rem;

			li {
				font-family: 'supersize-bk-box', sans-serif;
				font-size: 1.2rem;

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

		.burger {
			display: none;
		}

		@include lg {
			left: auto;
			right: 0;
			top: 0;
			align-items: center;
			width: 100%;
			padding: 2rem;
			margin-top: 6rem;
			pointer-events: none;
			background-color: rgba($background, 0);
			transition: background-color 300ms ease;

			.burger {
				display: block;
				width: 2rem;
				height: 1.7rem;
				position: fixed;
				right: 2rem;
				top: 3rem;
				transform: translateY(calc(0.7rem - 50%));
				background-color: transparent;
				pointer-events: all;
				cursor: pointer;

				.burger-line {
					position: relative;
					transition: all 300ms ease;

					&, &::before, &::after {
						width: 100%;
						height: 0.3rem;
						background-color: $blue;
						border-radius: 0.15rem;
					}

					&::before, &::after {
						content: "";
						position: absolute;
					}

					&::before {
						top: -0.7rem;
					}

					&::after {
						top: 0.7rem;
					}
				}
			}

			ul {
				align-items: center;
				gap: 0.5rem;
				opacity: 0;
				transition: opacity 300ms ease;
			}

			.fi-instagram {
				opacity: 0;
				transition: opacity 300ms ease;
			}

			&.active {
				pointer-events: all;
				background-color: rgba($background, 0.9);

				.burger {
					.burger-line {
						transform: rotate(225deg);

						&::before, &::after {
							top: 0;
							transform: rotate(90deg);
						}
					}
				}

				ul, .fi-instagram {
					opacity: 1;
				}
			}
		}
	}
</style>