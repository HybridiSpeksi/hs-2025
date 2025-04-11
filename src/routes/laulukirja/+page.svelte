<script lang="ts">
	import { debounce } from '$lib/utils/utils';
	import type { Song } from '$lib/types/songs';
	import MdiArrowUp from '~icons/mdi/arrow-up';

	export let data: { songs: Song[] };

	// Map years to production names
	const productions: Record<number, string> = {
		2014: 'Meidän speksi',
		2015: 'H.A.L.I.',
		2016: 'BratvaKontra',
		2017: 'Kruunun kohtalo',
		2018: 'Älä ammu ohi',
		2019: 'Viimeinen lohikäärmeisku',
		2020: '2101: Avaruusristeily',
		2022: 'Inferno: Kunnes Kadotus meidät korjaa',
		2023: 'Kreivin aikaan',
		2024: 'Kevätpäivänseisaus',
		2025: 'Kippis ja kavallus',
	};

	// State
	let selectedYear = 2014;
	let searchQuery = '';
	let searchInput: HTMLInputElement;
	let scrollY = 0;

	$: years = [...new Set(data.songs.map((song) => song.year))].sort((a, b) => a - b);

	$: showScrollTop = scrollY > 300;

	// Search from all songs
	$: searchResults = searchQuery
		? data.songs
				.filter(
					(song) =>
						song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
						song.lyrics.toLowerCase().includes(searchQuery.toLowerCase()) ||
						song.originalArtist.toLowerCase().includes(searchQuery.toLowerCase()) ||
						song.originalSong.toLowerCase().includes(searchQuery.toLowerCase()),
				)
				.slice(0, 10)
		: [];

	// Filter songs based on selected year
	$: displayedSongs = data.songs.filter((song) => song.year === selectedYear);

	// Debounce to prevent too many search events
	const handleSearch = debounce((event: Event) => {
		const target = event.target as HTMLInputElement;
		searchQuery = target.value;
	}, 300);

	function scrollToSong(song: Song) {
		selectedYear = song.year;
		searchQuery = '';
		if (searchInput) {
			searchInput.value = '';
		}
		setTimeout(() => {
			const element = document.getElementById(song.title);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}, 100);
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:window bind:scrollY />

<div class="songbook">
	<h1>Laulukirja</h1>

	<!-- Search bar and results -->
	<div class="controls">
		<div class="search-container">
			<input
				type="text"
				placeholder="Hae laulua tai sanoitusta..."
				on:input={handleSearch}
				class="search-input"
				bind:this={searchInput} />

			{#if searchResults.length > 0}
				<div class="search-results">
					{#each searchResults as song (song.id)}
						<button class="result-button" on:click={() => scrollToSong(song)}>
							<span class="song-title">{song.title}</span>
							<span class="original-artist"
								>{`${song.originalArtist} - ${song.originalSong}`}</span>
						</button>
					{/each}
				</div>
			{/if}
		</div>

		<!-- Year dropdown menu -->
		<div class="year-select">
			<select bind:value={selectedYear} class="year-dropdown">
				{#each years as year}
					<option value={year}>
						{#if year === 2014}
							{productions[year]}
						{:else}
							{year} - {productions[year]}
						{/if}
					</option>
				{/each}
			</select>
		</div>
	</div>

	<!-- Song list -->
	<div class="songs-container">
		{#each displayedSongs as song (song.id)}
			<div class="song-card" id={song.title}>
				<div class="song-header">
					<h2>{song.title}</h2>
					<span class="original-artist">
						alkup. {song.originalArtist} - {song.originalSong}
					</span>
				</div>
				<div class="song-info">
					{#if song.year !== 2014}
						<span
							>{productions[song.year]} - {song.scene}. kohtaus, {song.typeName}</span>
					{/if}
				</div>

				<div class="lyrics">
					{#each song.lyrics.split('\r\n\r') as verse}
						<div class="verse">
							{#each verse.split('\r\n') as line}
								<div class="line">{line}</div>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<!-- Scroll to top button -->
	{#if showScrollTop}
		<button class="scroll-top-button" on:click={scrollToTop} aria-label="Palaa ylös">
			<MdiArrowUp />
		</button>
	{/if}
</div>

<style lang="scss">
	.songbook {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;

		h1 {
			text-align: center;
			margin-bottom: 2rem;
		}
	}

	.controls {
		margin: 0 auto;
		max-width: 550px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.search-container {
		position: relative;
		width: 100%;

		.search-input {
			width: 100%;
			padding: 1rem;
			font-size: 1.1rem;
			border: 2px solid #eee;
			border-radius: 8px;
			transition: border-color 0.2s;

			&:focus {
				outline: none;
				border-color: #4b62e4;
			}
		}

		.search-results {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background: white;
			border-radius: 8px;
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
			margin-top: 0.3rem;
			max-height: 500px;
			overflow-y: auto;
			z-index: 1000;

			.result-button {
				width: 100%;
				padding: 1rem;
				border: none;
				background: transparent;
				cursor: pointer;
				text-align: left;
				display: flex;
				flex-direction: column;
				gap: 0.25rem;

				&:hover {
					background: #f5f5f5;
				}

				.song-title {
					font-weight: bold;
					color: #333;
				}

				.original-artist {
					font-size: 0.9rem;
					color: #666;
				}
			}
		}
	}

	.year-select {
		width: 100%;

		.year-dropdown {
			width: 100%;
			padding: 1rem;
			font-size: 1.1rem;
			border: 2px solid #eee;
			border-radius: 8px;
			background: white;
			cursor: pointer;

			&:focus {
				outline: none;
				border-color: #4b62e4;
			}
		}
	}

	.songs-container {
		display: grid;
		gap: 1.5rem;

		.song-card {
			background: #f6eee3;
			scroll-margin-top: 1rem;
			border-radius: 12px;
			padding: 2rem;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
			transition: background-color 0.3s ease;

			h2 {
				margin: 0 0 1rem;
				color: #333;
				display: inline-block;
				@media screen and (max-width: 768px) {
					margin: 0 0 0.4rem;
				}
			}

			.song-header {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				gap: 0rem 1.5rem;
			}

			.original-artist {
				font-style: italic;
				display: inline-block;
				color: #666;
				@media screen and (max-width: 768px) {
					margin-bottom: 0.3rem;
				}
			}

			.song-info {
				gap: 0.5rem;
				margin-bottom: 1.5rem;
				color: #666;
				@media screen and (max-width: 768px) {
					margin-bottom: 1.5rem;
				}
			}

			.lyrics {
				color: #333;
				.verse {
					margin-bottom: 1.5rem;

					.line {
						line-height: 1.6;
					}
				}
			}
		}
	}

	.scroll-top-button {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		bottom: 2rem;
		right: 2rem;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: #4b62e4;
		color: white;
		border: none;
		cursor: pointer;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		transition: all 0.2s;

		&:hover {
			transform: translateY(-2px);
			background: #192ea5;
		}
	}

	@media (max-width: 768px) {
		.songbook {
			padding: 1rem;
		}

		.songs-container .song-card {
			padding: 1.5rem;
		}
	}
</style>
