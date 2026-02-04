<script lang="ts">
    import type { Sponsor } from '$lib/types/common';

    export let sponsors: Sponsor[];

    function openSponsorLink(url: string) {
        if (url) window.open(url, '_blank');
    }

    function getMainSponsorHeading() {
        return sponsors.filter((sponsor) => sponsor.mainsponsor).length > 1
            ? 'Yhteistyössä'
            : 'Yhteistyössä';
    }

    function hasMainSponsors() {
        return sponsors.some(
            (sponsor) => sponsor.logoUrl && sponsor.logoUrl && sponsor.mainsponsor,
        );
    }

    function hasRegularSponsors() {
        return sponsors.some((sponsor: Sponsor) => sponsor.logoUrl && !sponsor.mainsponsor);
    }
</script>

<div class="sponsors-component">
    {#if hasMainSponsors()}
        <h2 class="global-center main-sponsor-heading">{getMainSponsorHeading()}</h2>
        <div class="main-sponsors-container sponsors-container">
            {#each sponsors as sponsor}
                {#if sponsor.logoUrl && sponsor.mainsponsor}
                    <div
                        class="main-sponsor-logo-container"
                        on:click={() => openSponsorLink(sponsor.webpage)}
                        on:keydown={() => openSponsorLink(sponsor.webpage)}
                        role="button"
                        tabindex="0">
                        <img
                            src={sponsor.logoUrl}
                            alt={sponsor.name}
                            class="main-sponsor-logo"
                            loading="lazy" />
                    </div>
                {/if}
            {/each}
        </div>
    {/if}
    {#if hasRegularSponsors()}

        <div class="regular-sponsors-container sponsors-container">
            {#each sponsors as sponsor}
                {#if sponsor.logoUrl && !sponsor.mainsponsor}
                    <div
                        class="sponsor-logo-container"
                        on:click={() => openSponsorLink(sponsor.webpage)}
                        on:keydown={() => openSponsorLink(sponsor.webpage)}
                        role="button"
                        tabindex="0">
                        <img
                            src={sponsor.logoUrl}
                            alt={sponsor.name}
                            class="sponsor-logo"
                            loading="lazy" />
                    </div>
                {/if}
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
    h2 {
        color: var(--black);
        margin: 0;
        text-align: center;
        width: 100%;
    }

    .sponsors-component {
        position: relative;
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        background-color: var(--white);
        padding: 50px 0;
        overflow: hidden;
    }

    .sponsors-component::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('$lib/images/logo_black.avif');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        opacity: 0.05;
    }

    .sponsors-container {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding-bottom: 25px;
        z-index: 1;
        img {
            z-index: 10;
        }
    }

    .main-sponsor-heading {
        margin-bottom: 25px;
        align-self: center;
    }

    .sponsor-logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15rem;

        @media (max-width: 767px) {
            margin: 0 4rem;
        }
    }

    .main-sponsor-logo-container {
        @extend .sponsor-logo-container;
        width: 23rem;
    }

    .sponsor-logo {
        max-width: 150px;
        padding: 10px;
        height: auto;
        max-width: 100%;
        border: solid transparent 5px;
        margin: 0;
        cursor: pointer;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.2);
        }
    }

    .main-sponsor-logo {
        @extend .sponsor-logo;
        max-width: 500px;
        width: 100%;

        &:hover {
            transform: scale(1.1);
        }
    }
</style>
