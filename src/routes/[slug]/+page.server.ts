export const prerender = true;

import { PUBLIC_WP_REST_API_URL as restUrl } from '$env/static/public';
import { error } from '@sveltejs/kit';
import type { SinglePageContent } from '$lib/types/content';

function getSlug(href: string): string | undefined {
    const segments = new URL(href).pathname.split('/');
    const last = segments.pop() || segments.pop();
    return last;
}

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url, fetch }) => {
    const slug = getSlug(url.href);

    let res: Response;
    try {
        res = await fetch(`${restUrl}/pages?&acf_format=standard&slug=${slug}`);

        if (!res.ok) {
            throw error(res.status, {
                message: `Ongelma sivun ${slug} lataamisessa`,
            });
        }

        const data = await res.json();

        if (!data || data.length === 0) {
            throw error(404, {
                message: `Sivua ${slug} ei löytynyt :(`,
            });
        }

        const pageData = data[0];

        const returnPageData: SinglePageContent = {
            title: pageData.title.rendered,
            contentHTML: pageData.content.rendered,
            bannerUrl: pageData.acf?.banner_image,
        };

        return returnPageData;
    } catch (e) {
        if (e instanceof Error) throw e;
        throw error(404, {
            message: `Sivua ${slug} ei löytynyt :(`,
        });
    }
};
