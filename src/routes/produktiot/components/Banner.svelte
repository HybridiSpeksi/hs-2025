<script lang="ts">
	import { onMount } from 'svelte';
	import { getAssetUrl } from '$lib/utils/directus';

	export let src: string;
	export let alt: string;

	let imageSrc: string;

	onMount(() => {
		const screenWidth = window.innerWidth;
		imageSrc =
			screenWidth < 768
				? getAssetUrl(src, '?width=400&format=auto')
				: getAssetUrl(src, '?width=1080&format=auto');
	});

	function getDefault() {
		src = '$lib/images/logo_white.avif';
	}
</script>

<img src={imageSrc} {alt} on:error={() => getDefault()} />

<style>
	img {
		width: 100%;
		pointer-events: none;
	}
</style>
