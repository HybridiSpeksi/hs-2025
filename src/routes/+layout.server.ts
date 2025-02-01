export const prerender = true;

import { error } from '@sveltejs/kit';
import {
    PUBLIC_WP_REST_API_URL as wpUrl,
    PUBLIC_WP_MEDIA_API_URL as mediaUrl,
} from '$env/static/public';
import type { Sponsor } from '$lib/types/common';
import type { NavigationObject, ContactItem } from '$lib/types/content';
import type { ApiSponsorResponse } from '$lib/types/wp-api';

/** @type {import('./$types').LayoutLoad} */
export const load = async ({ fetch }) => {
    // Fetch navigations from WP API
    const navigationsRes = await fetch(`${wpUrl}/navigations`);
    const navigations: NavigationObject[] = await navigationsRes.json();
    // Fetch address information from WP API
    const addressRes = await fetch(`${wpUrl}/address`);
    const addressData = await addressRes.json();

    let sponsors: Sponsor[] = [];
    try {
        const sponsorRes = await fetch(`${wpUrl}/sponsor?per_page=50`);
        const data: ApiSponsorResponse[] = await sponsorRes.json();

        sponsors = data.map(
            (item): Sponsor => ({
                id: item.id,
                name: item.acf.name,
                webpage: item.acf.webpage,
                logoUrl: `${mediaUrl}/${item.acf.logo}`,
                mainsponsor: item.acf.mainsponsor,
            }),
        );
    } catch (e) {
        throw error(500, {
            message: `Ongelma sponsoreiden hakemisessa`,
        });
    }

    let address: ContactItem;

    if (!addressData || addressData.errors || addressData.length != 1) {
        throw error(500, {
            message: `Ongelma yhteystietojen lataamisessa`,
        });
    } else {
        address = {
            email: addressData[0].acf.sahkopossti,
            IBAN: addressData[0].acf.tilinnumero,
            yTunnus: addressData[0].acf['y-tunnus'],
            address: addressData[0].acf.osoite,
        };
    }

    return {
        navigations: navigations.map((nav) =>
            nav.navigation_name === 'top-navigation'
                ? {
                      ...nav,
                      items: [
                          ...nav.items,
                          { id: 2200, title: 'Test Newspaper', link: '/test-newspaper' },
                      ],
                  }
                : nav,
        ),
        sponsors: sponsors,
        address: address || null,
    };
};
