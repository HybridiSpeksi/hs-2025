export interface Song {
	id: number;
	title: string;
	year: number;
	lyrics: string;
	originalArtist: string;
	originalSong: string;
	typeName?: string;
	typeNumber: number;
	scene: number;
}

export interface WPSong {
	id: number;
	acf: {
		title: string;
		year: string;
		lyrics: string;
		original_artist: string;
		original_song: string;
		type: string;
		scene: number;
	};
}
