<script lang="ts">
	import BlockContent from '$lib/components/BlockContent.svelte';
	import type { SinglePageContent } from '$lib/types/content';
	export let data: SinglePageContent;
</script>

<div class="page-bg">
	{#if data?.bannerUrl}
		<div class="top-banner">
			<img src={data.bannerUrl} alt={data.title} />
		</div>
	{/if}

	<div class="page wrap {data?.bannerUrl ? '' : 'padded'}">
		<BlockContent blockTitle={data?.title} blockHTML={data?.contentHTML} />
	</div>
</div>

<style>
	.page-bg {
		background-color: rgba(var(--black-rgb), 0.6);
	}
	.page {
		min-height: 85vh;
	}
/*
	.wrap {
		@media (max-width: 768px) {
			height: 30vh;
		}
	}
	*/


	.top-banner {
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 19rem;
		overflow: hidden;
		position: relative;
		margin: 0;

		@media (max-width: 800px) {
			height: 30vh;
		}

		& .title {
			font-size: 5rem;
			color: white;
			font-weight: 700;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			height: 50%;
			text-align: center;
			-webkit-text-stroke: 2px black;

			@media (max-width: 800px) {
				font-size: 4.5rem;
				-webkit-text-stroke: 1.5px black;
			}
		}

		& img {
			object-fit: cover;
			width: 100%;

			@media (max-width: 800px) {
				object-fit: fill;
				height: 100%;
			}
		}
	}

	.padded {
		padding-top: 20px;
	}
</style>
