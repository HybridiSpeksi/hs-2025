<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Production } from '$lib/types/production.d.ts';
	import Speksi from './components/Speksi.svelte';
	import { getAssetUrl } from '$lib/utils/directus';

	export let data;
	const productions: Production[] = data.productions;

	let selectedSpeksi: Production | null = null;

	const toggleSpeksi = (speksi: Production) => {
		selectedSpeksi = selectedSpeksi === speksi ? null : speksi;
	};
</script>

<svelte:head>
	<title>Aikaisemmat HybridiSpeksit</title>
	<meta name="description" content="Aikaisemmat HybridiSpeksin produktiot" />
</svelte:head>

<section class="wrap2">
	<h1>Aikaisemmat HybridiSpeksit</h1>
	<ul class="grid">
		{#each productions as speksi (speksi.id)}
			<li class="poster">
				<button
					type="button"
					id="{speksi.slug}button"
					title={speksi.title}
					data-quick-view
					on:click={() => toggleSpeksi(speksi)}
					style="background-image: url({getAssetUrl(
						speksi.poster,
						'?width=240&format=avif'
					)})">
				</button>
			</li>
			{#if selectedSpeksi === speksi}
				<li class="fullwidth" in:fly={{ duration: 900 }} out:fly={{ duration: 400 }}>
					<Speksi {speksi} />
				</li>
			{/if}
		{/each}
	</ul>
</section>

<style lang="scss">
	.wrap2 {
		text-align: center;
		margin: 0 10vw;
		@media only screen and (max-width: 768px) {
			margin: 0 0;
			padding: 0 0;
		}
	}

	ul.grid {
		margin: 0;
		margin-bottom: 20px;
		padding: 1rem 0 0 0;
		display: grid;
		gap: 1.75rem;
		grid-auto-flow: dense; /* 'dense' packing fills in holes earlier in the grid. */
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		justify-content: center;
		@media only screen and (max-width: 768px) {
			grid-template-columns: 100%;
		}
		li {
			list-style: none;
			max-width: 100%;
			grid-column-start: auto;
			margin: 0 auto;
			&.poster {
				width: 100%;
				max-width: 240px;
				:hover {
					transform: scale(1.07);
				}
				button {
					all: unset;
					background-repeat: no-repeat;
					background-size: cover;
					width: 100%;
					height: 350px;
					transition: all 0.4s ease;
					-webkit-transition: all 0.4s ease;
				}
			}
			&.fullwidth {
				grid-column: 1 / -1; /* Make fullwidth card span all grid columns. */
			}
		}
	}
</style>
