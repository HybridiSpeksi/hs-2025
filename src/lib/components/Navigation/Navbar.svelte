<script lang="ts">
    import { page } from '$app/stores';
    import { sidebarVisible } from './stores';
    import Sidebar from './Sidebar.svelte';
    import NavMenu from './NavMenu.svelte';
    import NavButton from './NavButton.svelte';
    import logoWh from '$lib/images/logo_white.avif';

    // Check sidebar visibility from store
    let sidebarShown: boolean;
    sidebarVisible.subscribe((value) => {
        sidebarShown = value;
    });

    // Negative margin for certain pages
    const negativeMarginSlugs = ['kevatpaivanseisaus'];
    $: currentPage = $page.url.pathname.split('/')[1];
    $: negativeMargin = negativeMarginSlugs.includes(currentPage);
</script>

<!-- Prevent touch scrolling when sidebar is open -->
<svelte:window
    on:touchmove|nonpassive={(e) => {
        if (sidebarShown) e.preventDefault();
    }} />

<div class="navbar" class:negativeMargin>
    <a href="/" class="logo">
        <img src={logoWh} alt="HybridiSpeksin logo" />
    </a>
    <!-- Sidebar and navigation button enabled only on mobile -->
    <div class="show-small">
        <NavButton />
        <Sidebar />
    </div>
    <div class="show-large">
        <NavMenu />
    </div>
</div>

<style lang="scss">
    .logo {
        height: 5rem;
        z-index: 1300;
        & img {
            height: 100%;
        }
    }

    .navbar {
        display: flex;
        flex-direction: row;
        background-color: var(--navbar-bg);
        justify-content: space-between;
        align-items: center;
        position: relative;
        max-width: 100vw;
        height: 6rem;
        z-index: 100;
        padding: 0 1.5rem;
    }

    .negativeMargin {
        background-color: transparent;
        margin-bottom: -6rem;
    }

    .show-small {
        display: none;
    }
    .show-large {
        display: contents;
        display: flex;
        align-items: center;
    }
    @media (max-width: 768px) {
        .show-small {
            display: contents;
        }
        .show-large {
            display: none;
        }
    }
</style>
