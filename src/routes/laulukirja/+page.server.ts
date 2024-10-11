export const prerender = true;

import { WP_REST_API_URL } from '$env/static/private';
import type { WPSong, Song } from '$lib/types/songs';

/** @type {import('./$types').LayoutLoad} */
export const load = async ({ fetch }) => {
	// Can only fetch 100 items per page in WP REST API, multiple requests needed
	const ITEMS_PER_PAGE = 100;

	// Find the total number of songs from X-WP-Total header
	const res = await fetch(`${WP_REST_API_URL}/songs?per_page=1`);
	const totalSongs = Number(res.headers.get('X-WP-Total'));
	const totalPages = Math.ceil(totalSongs / ITEMS_PER_PAGE);

	// Promises to fetch all songs
	const songPromises = Array.from({ length: totalPages }, (_, i) =>
		fetch(`${WP_REST_API_URL}/songs/?per_page=${ITEMS_PER_PAGE}&page=${i + 1}`).then((res) =>
			res.json(),
		),
	);

	// Map song types to numbers for sorting
	const songTypes: Record<string, number> = {
		'Pääbiisi' : 1,
		'1. Omstart' : 2,
		'2. Omstart' : 3,
	};

	try {
		// Fetch all pages concurrently
		const songsResults = await Promise.all(songPromises);

		// Transform the results
		const allSongs: Song[] = songsResults.flat().map((wpSong: WPSong) => ({
			id: wpSong.id,
			title: wpSong.acf.title,
			year: parseInt(wpSong.acf.year),
			lyrics: wpSong.acf.lyrics,
			originalArtist: wpSong.acf.original_artist,
			originalSong: wpSong.acf.original_song,
			typeName: wpSong.acf.type,
			typeNumber: songTypes[wpSong.acf.type],
			scene: wpSong.acf.scene ? wpSong.acf.scene : 1,
		}));

		// Sort songs by year and then by title
		allSongs.sort((a, b) => {
			if (a.year !== b.year) {
				return b.year - a.year;
			}
			if (a.scene !== b.scene) {
				return a.scene - b.scene;
			}
			return a.typeNumber - b.typeNumber;
		});

		return {
			songs: allSongs,
		};
	} catch (error) {
		console.error('Error fetching songs:', error);
		throw error;
	}
};
