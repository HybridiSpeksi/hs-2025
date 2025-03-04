<script lang="ts">
    export let title: string;
    import { onMount } from 'svelte';

    let displayTitle = '';
    let element: HTMLElement;
    let isVisible = false;

    let words = title.split(' ');

    // Typewriter effect with variable speed
    function typewriter(text: string, baseSpeed: number = 30) {
        displayTitle = '';
        let i = 0;

        function type() {
            if (i < text.length) {
                displayTitle += text.charAt(i);
                i++;

                const variableSpeed = baseSpeed * (0.7 + Math.random() * 0.6);

                const extraDelay =
                    text.charAt(i - 1) === ' '
                        ? baseSpeed * 0.5
                        : [',', '.', '!', '?', ':'].includes(text.charAt(i - 1))
                          ? baseSpeed * 1.5
                          : 0;

                setTimeout(type, variableSpeed + extraDelay);
            }
        }
        type();
    }

    // Trigger animation when in view
    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isVisible) {
                    isVisible = true;
                    // Start typewriter effect with a small delay
                    setTimeout(() => typewriter(title), 200);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 },
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    });
</script>

<div class="newspaper-title" bind:this={element}>
    <h1>
        {#each words as word, wordIndex}
            <span class="word">
                {#each Array.from(word) as char, charIndex}
                    <span class="char-container">
                        <span class="char-placeholder" aria-hidden="true">{char}</span>
                        <span
                            class="char"
                            class:visible={displayTitle.length >
                                words.slice(0, wordIndex).join(' ').length +
                                    (wordIndex > 0 ? wordIndex : 0) +
                                    charIndex}>{char}</span>
                    </span>
                {/each}
            </span>
            {#if wordIndex < words.length - 1}
                <span
                    class="space-container"
                    class:visible={displayTitle.length >
                        words.slice(0, wordIndex + 1).join(' ').length + wordIndex}>&nbsp;</span>
            {/if}
        {/each}
    </h1>

    <hr class="line" />
    <hr class="line" />
    <hr class="line" />
</div>

<style lang="scss">
    .newspaper-title {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-family: 'IM Fell English', serif;
        padding: 1rem 0;

        h1 {
            margin: 0;
            padding: 0;
            font-size: 2.3rem;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
            display: inline-block;
            position: relative;
            min-height: 2.3rem;
        }
    }

    .word {
        display: inline-block;
        white-space: nowrap;
    }

    .char-container {
        position: relative;
        display: inline-block;
    }

    .space-container {
        display: inline-block;
        opacity: 0;

        &.visible {
            opacity: 1;
        }
    }

    .char-placeholder {
        visibility: hidden;
        opacity: 0;
    }

    .char {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;

        &.visible {
            opacity: 1;
        }
    }

    .line {
        max-width: 100%;
        width: 100%;
        height: 1px;
        background-color: black;
        margin: 0;
        padding: 0;
    }
</style>
