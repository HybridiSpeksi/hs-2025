<script>
    import { onMount } from 'svelte';
    export let videoURL = '';
    export let code = '';
    let lightboxOpen = false;

    function openLightbox() {
        lightboxOpen = true;
    }

    function closeLightbox() {
        lightboxOpen = false;
    }

    onMount(() => {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });
    });
</script>

<button on:click={openLightbox}
    ><img src="https://i.ytimg.com/vi/{code}/maxresdefault.jpg" alt="youtube thumbnail" />
    <div class="play-mark"></div></button>

{#if lightboxOpen}
    <button class="lightbox" aria-label="open YouTube video player" on:click={closeLightbox}>
        <iframe
            width="80%"
            height="80%"
            src={videoURL}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </button>
{/if}

<style lang="scss">
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    button {
        position: relative;
        border: none;
        padding: 0;
        background: none;
        width: 50%;
        @media (max-width: 1000px) {
            width: 100%;
            padding: 0 25px;
        }
    }

    button img {
        display: block;
        width: 100%;
    }

    .play-mark {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-left: 40px solid white;
        transform: translate(-50%, -50%);
    }
</style>
