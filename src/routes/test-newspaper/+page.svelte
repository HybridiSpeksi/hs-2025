<script>
    import Newspaper from '$lib/components/newspaper/Newspaper.svelte';
    import NewsSection from '$lib/components/newspaper/NewsSection.svelte';
</script>

<main class="page">
    <Newspaper hasTitleOf="Hellos World">
        <p>Hello</p>
    </Newspaper>
    <Newspaper>
        <NewsSection hasTitleOf="Section">
            <p>uutisia</p>
            <p>
                masdlkk asdaspdkasofmaf asdksfjlnaddas,asfasdasd sad asd asd asd asd asd asd asd
                dsfa fs asd asd asd asd asd asd asd asf asf asf asf asf asf DISPLAY
            </p>
        </NewsSection>
    </Newspaper>
</main>

<style lang="scss">
    .page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 100%;
        gap: 2rem;
        padding: 1rem;
        margin: 0 auto;
        background: #f8f8f8;
    }
</style>
