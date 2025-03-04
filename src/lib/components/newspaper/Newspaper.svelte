<script lang="ts">
    import NewspaperTitle from './NewspaperTitle.svelte';

    export let hasTitleOf: string = '';
    export let pageNumber: string = '';
    export let date: string = new Date().toLocaleDateString();
</script>

<section class="newspaper">
    <div class="newspaper-header">
        <span class="newspaper-date">{date}</span>
        <span class="newspaper-number">{pageNumber}</span>
    </div>
    <hr class="newspaper-line" />

    {#if hasTitleOf}
        <NewspaperTitle title={hasTitleOf} />
    {/if}

    <slot />
</section>

<style lang="css">
    .newspaper {
        display: flex;
        flex-direction: column;
        width: 83%;
        min-height: 75vh;
        padding: 1rem 1.4rem;
        margin-bottom: 1.5rem;
        box-shadow: 1px 1px 1px rgba(0.5, 0.5, 0.5, 0.5);
        color: #0a0a0a;
        position: relative;
        overflow: hidden;
        background: url('/images/paper.avif') repeat center center;
        background-size: cover;
        background-blend-mode: multiply;
        /* filter: grayscale(100%) contrast(100%) brightness(100%); */
        @media (min-width: 1000px) {
            max-width: 1000px;
        }
    }

    .newspaper :global(*) {
        font-family: 'IM Fell English', serif;
        color: rgba(0, 0, 0, 0.75);
        padding: 0;
        margin: 0;
        font-weight: 400;
        text-shadow: 0.2px 0.2px 0.5px rgba(0, 0, 0, 0.2);
        mix-blend-mode: darken;
        font-variant-ligatures: historical-ligatures;
    }

    .newspaper :global(h1) {
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
    }

    .newspaper :global(p) {
        font-size: 1.3rem;
        text-align: start;
        hyphens: auto;
        margin-bottom: 1.5rem;
    }

    .newspaper :global(img) {
        max-width: 100%;
    }

    .newspaper-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.1rem;
        padding: 0;
    }

    .newspaper-line {
        border: none;
        height: 2px;
        background-color: black;
        max-width: 100%;
        margin: 0;
    }
</style>
