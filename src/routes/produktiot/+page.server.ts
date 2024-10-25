export const prerender = true;

import { PUBLIC_DIRECTUS_API_URL } from '$env/static/public';
import type { ApiProductions } from '$lib/types/production.d.ts';
import { redirect } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
	const res = await fetch(
		`${PUBLIC_DIRECTUS_API_URL}/items/productions?fields=*,gallery_images.*`
	);

	if (res.ok) {
		try {
			const data: ApiProductions = await res.json();
			const productions = data.data;
			return { productions };
		} catch (e) {
			console.error('Error fetching productions:', e);
			throw redirect(307, '.');
		}
	}
	throw redirect(307, '.');
};
