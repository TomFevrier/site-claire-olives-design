<script>
	export let src;
	export let alt = '';
	export let size;

	let isLoaded = true;

	const sizes = [160, 256, 320, 480, 640, 800, 960, 1280];

	const srcset = sizes.map((size) => `${src.replace('uploads', `images/${size}`)} ${size}w`).join(', ');
</script>

<img {src} {srcset} {alt} sizes='{size}px' />