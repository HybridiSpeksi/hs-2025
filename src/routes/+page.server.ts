import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = () => {
    redirect(307, '/2025');
};
