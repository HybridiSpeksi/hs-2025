import { PUBLIC_DIRECTUS_API_URL } from '$env/static/public';

export function getAssetUrl(src: string, queryString: string = ''): string {
	const baseUrl = PUBLIC_DIRECTUS_API_URL;
	return `${baseUrl}/assets/${src}/${queryString}`;
}
