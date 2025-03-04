<script lang="ts">
    import Navbar from '$lib/components/Navigation/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { page } from '$app/stores';
    import '@styles/app.scss';

    function getPageTitle(pathname: string) {
        const path = pathname.slice(1);
        switch (pathname) {
            case '/':
                return 'HybridiSpeksi';
            case '/2025':
                return 'Kippis ja Kavallus | HybridiSpeksi';
            case '/hybridispeksi-ry-yhdistyksen-saannot':
                return 'Yhdistyksen säännöt | HybridiSpeksi';
            case '/hybridispeksi-ryn-merkkiohjesaanto':
                return 'Merkkiohjesääntö | HybridiSpeksi';
            default:
                if (!path) return 'HybridiSpeksi';
                // Capitalize first letter for title
                return path.charAt(0).toUpperCase() + path.slice(1) + ' | HybridiSpeksi';
        }
    }
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <meta name="description" content="HybridiSpeksin verkkosivut" />
    <meta
        name="keywords"
        content="HybridiSpeksi, speksi, teatteri, opiskelija, opiskelijateatteri, Turku, UTU, Turun Yliopisto, University of Turku" />
    <title>{getPageTitle($page.url.pathname)}</title>
</svelte:head>

<Navbar />
<slot />
<Footer />

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }
</style>
