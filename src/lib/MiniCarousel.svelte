<script>
	let title;
	export { title as title_singular };
	export let models;
	export let path;

	let slideIndex = 0;

	const prev = () => {
		slideIndex = Math.max(0, slideIndex - 1);
	}

	const next = () => {
		slideIndex = Math.min(slideIndex + 1, models.length - 1);
	}

	$: activeModel = models[slideIndex];
</script>

<div class='mini-carousel'>
	<div class='container'>
		<ul class='models' style:transform='translateX({-slideIndex * 100}%)'>
			{#each models as model, i}
				<li class='model' class:active={slideIndex === i}>
					<a href={path}>
						<img src={model.cover} alt='{title} {model.title}' />
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class='info'>
		<h3>{title}</h3>
		<h4>{activeModel.title}</h4>
		<div class='btn-container'>
			<button
				class:disabled={slideIndex === 0}
				aria-label='Précédent'
				on:click={prev}
			>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' class='feather feather-arrow-left'>
					<line x1='19' y1='12' x2='5' y2='12'></line>
					<polyline points='12 19 5 12 12 5'></polyline>
				</svg>
			</button>
			<button
				class:disabled={slideIndex === models.length - 1} 
				aria-label='Suivant'
				on:click={next}
			>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' class='feather feather-arrow-right'>
					<line x1='5' y1='12' x2='19' y2='12'></line>
					<polyline points='12 5 19 12 12 19'></polyline>
				</svg>
			</button>
		</div>
	</div>
</div>

<style lang='scss'>
	.mini-carousel {
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		.container {
			overflow: hidden;

			.models {
				display: flex;
				flex-direction: row;
				transition: transform 300ms ease-out;

				.model {
					flex: 1 0 100%;
					opacity: 0;
					transition: opacity 200ms ease-out;

					&.active {
						opacity: 1;
					}

					img {
						width: 100%;
					}
				}
			}
		}

		.info {
			margin-top: 0rem;
			text-align: right;

			h3 {
				margin: 0;
				font-size: 1rem;
			}

			h4 {
				margin: 0;
				font-size: 1.1rem;
				text-transform: uppercase;
			}

			.btn-container {
				display: flex;
				justify-content: flex-end;

				button {
					width: 2rem;

					&.disabled {
						pointer-events: none;
						cursor: not-allowed;
						opacity: 0.1;
					}

					.feather {
						fill: none;
						stroke: black;
						stroke-width: 2px;
						stroke-linecap: round;
						stroke-linejoin: round;
					}

					&:first-child:hover, &:first-child:active {
						animation: wiggleLeft 300ms forwards;
					}

					&:last-child:hover, &:last-child:active {
						animation: wiggleRight 300ms forwards;
					}

					@keyframes wiggleLeft {
						50% {
							transform: translateX(-3px);
						}
					}

					@keyframes wiggleRight {
						50% {
							transform: translateX(3px);
						}
					}
				}

				// @include md {
				// 	left: 0;
				// 	width: 100%;

				// 	button {
				// 		width: 2rem;
				// 	}
				// }
			}
		}
	
	}
</style>
