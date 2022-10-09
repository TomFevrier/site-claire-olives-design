<script>
	import { page } from '$app/stores';

	$: ({ routeId } = $page);

	const ROUTES = [
		'animations',
		'events',
		'archives',
		'vrac',
		'contact'
	];
</script>

<a class='logo' href='/'>
	<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 500 500'>
		<defs>
			<clipPath id='mask' class:hide-name={!!routeId}>
				<path d='M37.93,199.06c19.1,6.2,35.94-15.62,56.62-7.93,26.85,10.1,31,50,65.21,73.29a61.92,61.92,0,0,0,35.76,11.09,87.64,87.64,0,0,0,24.14,56.57l-43.55,29.53-48.82-34s-48.14,80.91,27.57,129.82S284.72,437,284.72,437L237.3,404l15.77-49.57c37.57,14.69,80.16,3.72,105.32-25.88l20.94,14.11-19.06,26.74L383.52,385l-18.68,25.83L387.31,426l-26,36.12,21.9,14.78,84.45-117.21-92.08-62.16a86.28,86.28,0,0,0,1.08-48.2l45.27-20.8a37.78,37.78,0,0,0,35.67,2.33c18.3-8.46,26.06-29.73,17.44-47.53S444.33,158,426,166.36a35.71,35.71,0,0,0-20.69,28.16l-46.17,21.22a91.48,91.48,0,0,0-53.75-31.51L303.88,138a64.78,64.78,0,0,0,36.94-31.18C357.34,75.3,344.44,36.71,312,20.7c-32.64-16-72.4-3.54-88.89,27.93s-3.65,70.06,28.79,86.07a68.3,68.3,0,0,0,8,3.24l1.43,48.23a93.5,93.5,0,0,0-42.53,26.12L37.94,147.45s-13.28-2.34-20.14,7.65S18.72,193,37.93,199.06Zm270.16,34.21c22.21,11,31,37.26,19.75,58.8s-38.55,30.09-60.74,19.06-31-37.33-19.8-58.85C258.8,230.84,285.94,222.28,308.09,233.27Z' />
				<text id='name' x={380} y={120}>
					cl<tspan class='bold'>a</tspan>ire<tspan class='bold'>o</tspan>livès
				</text>
				<circle class='dot' cx={550} cy={45} r={12} />
				<circle class='dot' cx={770} cy={45} r={12} />
			</clipPath>
		</defs>
		<g id='bands-wrapper'>
			<g id='bands'
				class:monochrome={ROUTES.includes(routeId)}
				class:blank={routeId === 'about'}
			>
				<rect
					class='band orange'
					class:full={routeId === 'contact'}
					style='--width: 117; --offset: 0;' />
				<rect
					class='band lavender'
					class:full={routeId === 'events'}
					style='--width: 60; --offset: 117;' />
				<rect
					class='band blue'
					class:full={routeId === 'animations'}
					style='--width: 145; --offset: 177;' />
				<rect
					class='band purple'
					class:full={routeId === 'archives'}
					style='--width: 80; --offset: 322;' />
				<rect
					class='band red'
					class:full={routeId === 'vrac'}
					style='--width: 598; --offset: 402;' />
			</g>
		</g>
	</svg>
</a>

<style lang='scss'>
	:global {
		.wf-loading {
			#mask > .dot {
				display: none;
			}
		}
	}
	.logo {
		position: fixed;
		top: 1rem;
		left: 1rem;
		display: block;
		width: 8rem;
		z-index: 999;

		svg {
			width: 100%;
			overflow: visible;

			#mask {
				#name {
					font-family: 'bc-alphapipe', sans-serif;
					font-size: 110px;

					.bold {
						font-weight: bold;
					}
				}

				&.hide-name {
					#name, .dot {
						display: none;
					}
				}

				@include xl {
					#name, .dot {
						display: none;
					}
				}
			}

			#bands-wrapper {
				clip-path: url(#mask);

				#bands {
					transform-origin: center;
					transform: rotate(32.66deg);

					.band {
						x: calc(var(--offset) * 1px);
						y: -500px;
						width: calc(var(--width) * 1px);
						height: 1000px;
						transition: all 300ms ease-out;
						stroke-width: 2px;

						&.orange {
							fill: $orange;
							stroke: $orange;
						}

						&.blue {
							fill: $blue;
							stroke: $blue;
						}

						&.lavender {
							fill: $lavender;
							stroke: $lavender;
						}

						&.purple {
							fill: $purple;
							stroke: $purple;
						}

						&.red {
							fill: $red;
							stroke: $red
						}
					}

					&.blank > .band {
						fill: white;
						stroke: white;
					}

					&.monochrome {
						.band {
							x: 0;
							width: 0;

							&.full {
								x: 0;
								width: 500px;

								& ~ .band {
									x: 500px;
									width: 0;
								}
							}
						}
					}
				}
			}
		}

		@include xl {
			left: 0;
			top: 0;
			width: 100%;
			height: 6rem;
			display: flex;
			justify-content: center;
			align-items: center;

			&::before {
				content: "";
				position: absolute;
				inset: 0;
				background: linear-gradient(
					to bottom,
					var(--background-color, $background) 0%,
					var(--background-color, $background) 25%,
					transparent);
				// opacity: 0.5;
				z-index: -1;
			}

			svg {
				width: 5rem;
			}

			h1 {
				display: none;
			}
		}
	}
	
</style>
