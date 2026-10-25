<script lang="ts">
    import { onMount } from 'svelte';

    export let src: string;
    export let alt: string = '';
    export let className: string = '';

    // How much of the image needs to be visible for animation (0-1)
    export let visibilityThreshold: number = 0.65;

    let imageElement: HTMLImageElement;
    let isInView = false;

    function isElementInViewport(el: HTMLElement) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        // Calculate visible height of the element
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        // Calculate percentage of element that's visible
        const visiblePercentage = visibleHeight > 0 ? visibleHeight / rect.height : 0;
        return visiblePercentage >= visibilityThreshold;
    }

    export function updateVisibility(scrollY: number) {
        if (imageElement) {
            isInView = isElementInViewport(imageElement);
        }
    }

    onMount(() => {
        // Initial check
        if (imageElement) {
            isInView = isElementInViewport(imageElement);
        }
    });
</script>

<img
    bind:this={imageElement}
    {src}
    {alt}
    class={`animated-image ${className} ${isInView ? 'in-view' : ''}`}
    loading="lazy" />

<style>
    .animated-image {
        margin: 0 auto;
        filter: grayscale(100%);
        transition: filter 2s ease-out;
    }

    .animated-image.in-view {
        filter: grayscale(0%);
    }
</style>
