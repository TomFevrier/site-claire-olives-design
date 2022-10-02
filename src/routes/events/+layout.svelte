<script>
	import { page } from '$app/stores';

	import { Content, VideoEmbed } from '$lib';

	const { events } = $page.data;

	console.log(events)
</script>

<Content>
	<h1>events</h1>
	<ul class='events'>
		{#each events.sort((a, b) => new Date(b) - new Date(a)) as event}
			<li class='event'>
				<h2 class='title'>
					{event.title}
				</h2>
				<h3 class='date'>
					{new Date(event.date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
				</h3>
				<article>
					<figure class='cover'>
						<img src={event.cover} alt='' />
						{#if event.caption}
							<figcaption>{event.caption}</figcaption>
						{/if}
					</figure>
					<p class='description'>
						{@html event.description.replace(/\n/g, '<br />')}
					</p>
					<ul class='gallery'>
						{#each (event.videos || []) as { url, caption }}
							<li>
								<figure class='video'>
									<VideoEmbed title={caption} {url} />
									{#if caption}
										<figcaption>{caption}</figcaption>
									{/if}
								</figure>
							</li>
						{/each}
						{#each (event.images || []) as { image, caption }}
							<li>
								<figure class='image'>
									<img src={image} alt='' />
									{#if caption}
										<figcaption>{caption}</figcaption>
									{/if}
								</figure>
							</li>
						{/each}
					</ul>
				</article>
			</li>
		{/each}
	</ul>
</Content>

<style lang='scss'>
	h1 {
		color: $lavender;
	}

	.events {
		display: flex;
		flex-direction: column;
		gap: 4rem;
		width: 100%;

		.event {
			.title {
				font-size: 1.5rem;
				text-transform: uppercase;
				color: $lavender;
				margin: 0;
			}

			.date {
				font-size: 1rem;
				font-weight: 600;
				margin: 0;
			}

			article {
				text-align: left;
				display: grid;
				grid-template-areas:
					"a a a x"
					"c c c b";
				gap: 0.5rem;
			
				.cover {
					width: 100%;
					margin: 1rem 0;
					grid-area: a;
				}

				.description {
					grid-area: c;
					padding-right: 1rem;
					max-width: 32rem;
				}

				.gallery {
					grid-area: b;
					display: flex;
					flex-direction: column;
					gap: 1.5rem;
				}

				@include lg {
					display: flex;
					flex-direction: column;
					gap: 0;

					.description {
						padding: 0;
					}

					.gallery {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
						gap: 1.5rem 1rem;
						align-items: flex-end;
						margin-top: 2rem;
					}
				}
			}
		}
	}
</style>