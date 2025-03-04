<script lang="ts">
    export let hasTitleOf: string = '';
</script>

<article class="article">
    {#if hasTitleOf}
        <h3 class="title">{hasTitleOf}</h3>
        <hr class="line" />
    {/if}
    <div class="news-section">
        <slot />
    </div>
</article>

<style lang="scss">
    .article {
        margin: 1rem auto;
    }

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'IM Fell English', serif;
        padding: 0;
        margin: 0;
    }

    .line {
        width: 100%;
        height: 1px;
        background-color: black;
        margin: 0;
        padding: 0;
    }

    .news-section {
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        max-width: 35rem;
        flex-direction: column;
        gap: 0.2rem;
        padding: 0.5rem;
    }
</style>
