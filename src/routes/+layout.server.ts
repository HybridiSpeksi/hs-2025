export const prerender = true;

import { WP_REST_API_URL } from '$env/static/private';
import type { NavigationObject, ContactItem } from '$lib/types/content';

/** @type {import('./$types').LayoutLoad} */
export const load = async ({ fetch }) => {
	// Fetch navigations from WP API
	const navigationsRes = await fetch(`${WP_REST_API_URL}/navigations`);
	const navigations: NavigationObject[] = await navigationsRes.json();
	// Fetch address information from WP API
	const addressRes = await fetch(`${WP_REST_API_URL}/address`);

	const addressData = await addressRes.json();

	let address: ContactItem;

	if (!addressData || addressData.errors || addressData.length != 1) {
		console.error('Error fetching address:', addressData.errors);
		address = null;
	} else {
		address = {
			email: addressData[0].acf.sahkopossti,
			IBAN: addressData[0].acf.tilinnumero,
			yTunnus: addressData[0].acf['y-tunnus'],
			address: addressData[0].acf.osoite,
		};
	}

	return {
		navigations: navigations,
		address: address,
	};
};
