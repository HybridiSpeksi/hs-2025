<script lang="ts">
    import '@styles/wordpress/common.css';
    import '@styles/wordpress/style.css';
    import '@styles/wordpress/theme.css';

    export let blockTitle: string;
    export let blockHTML: string;
</script>

<div class="block page wrap">
    {#if blockTitle?.length > 0}
        <h1 class="title">{blockTitle}</h1>
    {/if}
    {#if blockHTML?.length > 0}
        <div class="content">{@html blockHTML}</div>
    {/if}
</div>

<style lang="scss">
    .block {
        @media (max-width: 767px) {
            margin: 0 auto;
            width: 85% !important;
        }
    }

    .wrap {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 20px;
        @media (max-width: 767px) {
            margin: 0 auto;
            padding: 0;
        }
    }

    .title {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    .content {
        max-width: 1000px;
        margin: 0 auto;

		:global(p) {
            font-size: 19px;
            @media (max-width: 767px) {
                font-size: 15px;
            }
        }

        @media (max-width: 767px) {
            :global(img) {
                max-height: 300px;
                max-width: 100%;
                object-fit: scale-down;
            }
        }
    }
</style>
