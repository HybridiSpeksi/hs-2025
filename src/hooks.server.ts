/** @type {import('@sveltejs/kit').Handle} */

export async function handle({ event, resolve }) {
    return resolve(event, {
        filterSerializedResponseHeaders: (name) => name.startsWith('x-'),
        preload: ({ type }) => type === 'font' || type === 'js' || type === 'css'
    });
}