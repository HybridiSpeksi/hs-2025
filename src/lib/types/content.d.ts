export type SinglePageContent = {
	title: string;
	contentHTML?: string;
	bannerUrl?: string;
} | null;

export type ContactItem = {
	email: string;
	IBAN: string;
	yTunnus: string;
	address: string;
} | null;

export type NavigationItem = {
	id: number;
	title: string;
	link: string;
};

export type NavigationObject = {
	navigation_name: string;
	items: NavigationItem[];
};
