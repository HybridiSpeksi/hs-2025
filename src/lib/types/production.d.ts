type ProductionLink = {
	title: string;
	url: string;
};

type ProductionStatistic = {
	name: string;
	value: string;
};

export type GalleryImage = {
	id: number;
	productions_id: number;
	directus_files_id: string;
};

export type Production = {
	id: number;
	status: string;
	sort: number | null;
	date_created: string;
	date_updated: string | null;
	title: string;
	year: number;
	description: string;
	color1: string;
	color2: string;
	color_button: string;
	links: ProductionLink[] | null;
	banner: string;
	poster: string;
	slug: string | null;
	playbill: string | null;
	color_button2: string | null;
	background: string | null;
	statistics: ProductionStatistic[] | null;
	gallery_images: GalleryImage[];
};

export type ApiProductions = {
	data: Production[];
};
