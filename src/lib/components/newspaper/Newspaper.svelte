<script lang="ts">
    import NewspaperTitle from './NewspaperTitle.svelte';

    export let hasTitleOf: string;
    export let version: string = 'Edition 1';
    export let date: string = new Date().toLocaleDateString();
</script>

<section class="newspaper">
    <div class="newspaper-header">
        <span class="newspaper-version">{version}</span>
        <span class="newspaper-date">{date}</span>
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
        flex: 1;
        max-width: 100%;
        min-width: 85%;
        width: 85%;
        min-height: 80vh;
        padding: 1rem 2rem;
        box-shadow: 1px 1px 1px rgba(0.5, 0.5, 0.5, 0.5);
        color: #0a0a0a;
        position: relative;
        overflow: hidden;
        background: url('/images/paper.avif') repeat center center;
        background-size: cover;
        background-blend-mode: multiply;
        filter: grayscale(100%) contrast(100%) brightness(100%);
    }

    .newspaper :global(*) {
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
        mix-blend-mode: multiply;
        opacity: 0.9;
        font-family: 'IM Fell English', serif;
        padding: 0;
        margin: 0;
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
        width: 100%;
        margin: 0;
    }
</style>
