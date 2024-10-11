export const prerender = false;

import { WP_REST_API_URL } from '$env/static/private';
import type { Person } from '$lib/types/common';
import type { ApiPersonResponse } from '$lib/types/wp-api';

export const load = async ({ fetch }) => {
	const response = await fetch(`${WP_REST_API_URL}/people?per_page=100`);
	if (!response.ok) {
		console.error('Error fetching people');
		return { people: [] };
	}

	const data: ApiPersonResponse[] = await response.json();

	if (!data || data.length == 0) {
		console.error('No people data found');
		return { people: [] };
	}

	const people: Person[] = data.map(
		(item): Person => ({
			id: item.id,
			slug: item.slug,
			title: item.title.rendered,
			name: item.acf.name,
			jobs: item.acf.jobs,
			type: item.acf.type,
			email: item.acf.email,
			imageUrl: item.acf.imageUrl,
			order: item.acf.order,
		}),
	);

	let sopoHTML;
	let sopoTitle;
	try {
		const res = await fetch(`${WP_REST_API_URL}/pages/2136`);
		const data = await res.json();
		sopoHTML = data.content.rendered;
		sopoTitle = data.title.rendered;
	} catch (error) {
		throw new Error('Error fetching sopo information');
	}

	return { people, sopoHTML, sopoTitle };
};
