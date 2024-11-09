<script lang="ts">
    import { sidebarVisible, toggleSidebar } from './stores';

    let sidebarShown: boolean;
    // Subscribe to the store
    sidebarVisible.subscribe((value) => {
        sidebarShown = value;
    });
</script>

<button
    class="nav-button"
    aria-label="Sidebar toggle button"
    class:sidebarShown
    on:click={() => toggleSidebar()}>
    <svg width="32" height="24">
        <line id="top" x1="0" y1="2" x2="32" y2="2" />
        <line id="middle" x1="0" y1="12" x2="32" y2="12" />
        <line id="bottom" x1="0" y1="22" x2="32" y2="22" />
    </svg>
</button>

<style>
    .nav-button {
        margin-right: 1rem;
        background-color: var(--navbutton-bg);
        border: none;
        border-radius: 0.8rem;
        outline: none;
        z-index: 10000;
        position: fixed; /* Fix mobile nav button to screen */
        top: 21px;
        right: 0px;
    }

    svg {
        min-height: 24px;
        transition: transform 0.3s ease-in-out;
    }

    svg line {
        stroke: var(--white);
        stroke-width: 3;
        transition: transform 0.3s ease-in-out;
    }

    .sidebarShown {
        background-color: var(--navbutton-bg-sidebar);
        transition: background-color 0.3s ease-in-out;
    }
    .sidebarShown svg {
        transform: scale(0.8);
    }

    .sidebarShown #top {
        transform: translate(6px, 0px) rotate(45deg);
    }

    .sidebarShown #middle {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    .sidebarShown #bottom {
        transform: translate(-12px, 9px) rotate(-45deg);
    }
</style>
