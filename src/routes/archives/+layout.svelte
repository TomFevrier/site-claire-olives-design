<script>
	import { page } from '$app/stores';

	import { swipe } from 'svelte-gestures';

	import { Content, Image } from '$lib';

	const { archives } = $page.data;

	let container;
	let slideIndex = 1;
	let isMoving = false;
	let isTransitionActive = true;

	const prev = () => {
		if (isMoving) return;

		isMoving = true;
		isTransitionActive = true;
		slideIndex--;
	}

	const next = () => {
		if (isMoving) return;

		isMoving = true;
		isTransitionActive = true;
		slideIndex++;
	}

	const handleInfiniteNavigation = () => {
		if (slideIndex === 0) {
			isTransitionActive = false;
			slideIndex = [...container.querySelectorAll('li')].length - 2;
		}

		if (slideIndex === [...container.querySelectorAll('li')].length - 1) {
			isTransitionActive = false;
			slideIndex = 1;
		}
		isMoving = false;
	}

	const handleKeyDown = (e) => {
		switch (e.key) {
			case 'ArrowLeft':
				return prev();
			case 'ArrowRight':
				return next();
		}
	}

	const handleSwipe = (e) => {
		switch (e.detail.direction) {
			case 'right':
				return prev();
			case 'left':
				return next();
		}
	}
</script>

<svelte:window on:keydown={handleKeyDown} />
<Content>
	<h1>archives</h1>
	<div class='gallery'>
		<div class='btn-container'>
			<button on:click={prev} aria-label='Précédent'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' class='feather feather-arrow-left'>
					<line x1='19' y1='12' x2='5' y2='12'></line>
					<polyline points='12 19 5 12 12 5'></polyline>
				</svg>
			</button>
			<button on:click={next} aria-label='Suivant'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' class='feather feather-arrow-right'>
					<line x1='5' y1='12' x2='19' y2='12'></line>
					<polyline points='12 5 19 12 12 19'></polyline>
				</svg>
			</button>
		</div>
		<div class='container' bind:this={container} use:swipe={{ touchAction: 'pan-y', timeframe: 300, minSwipeDistance: 60 }} on:swipe={handleSwipe}>
			<ul
				class='archives'
				class:transitionable={isTransitionActive}
				style:transform='translateX({-slideIndex * 100}%)'
				on:transitionend={handleInfiniteNavigation}
			>
				<li>
					<figure>
						<Image src={archives.at(-1).image} size={640} alt={archives.at(-1).caption} />
						<figcaption>
							{archives.at(-1).caption}
						</figcaption>
					</figure>
				</li>
				{#each archives as archive}
					<li>
						<figure>
							<Image src={archive.image} size={640} alt={archive.caption} />
							<figcaption>
								{archive.caption}
							</figcaption>
						</figure>
					</li>
				{/each}
				<li>
					<figure>
						<Image src={archives[0].image} size={640} alt={archives[0].caption} />
						<figcaption>
							{archives[0].caption}
						</figcaption>
					</figure>
				</li>
			</ul>
		</div>
	</div>
</Content>

<style lang='scss'>
	h1 {
		color: $purple;
	}

	.gallery {
		width: 100%;
		max-width: 36rem;
		position: relative;
		margin: 1rem 3rem;

		.btn-container {
			position: absolute;
			top: 50%;
			left: -3rem;
			transform: translateY(-100%);
			width: calc(100% + 6rem);
			display: flex;
			justify-content: space-between;
			z-index: 42;

			button {
				width: 2.5rem;

				.feather {
					fill: none;
					stroke: $purple;
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

			@include md {
				left: 0;
				width: 100%;

				button {
					width: 2rem;
				}
			}
		}

		.container {
			overflow: hidden;

			.archives {
				display: flex;
				flex-direction: row;
				transition: none;

				&.transitionable {
					transition: transform 300ms ease-out;
				}

				li {
					flex: 1 0 100%;

					figure {
						figcaption {
							text-align: center;
						}
					}
				}
			}
		}
	}
</style>