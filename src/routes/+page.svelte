<script lang="ts">
    import Sponsors from '$lib/components/Sponsors.svelte';
    export let data;

    console.log("Data: ", data)
</script>

<div class="page">
    <section class="global-wrap">
        <h2>Rakennamme parhaillaan seuraavan HybridiSpeksin verkkosivua!</h2>
        <img
            src="/images/hiiri.avif"
            alt="Mouse in a hardhat building the new webiste"
            draggable="false" />
    </section>
    <Sponsors sponsors={data.sponsors} />
</div>

<style lang="scss">
    h2 {
        margin: 0;
        color: var(--black);
        text-align: center;
        font-weight: 600;

        @media screen and (max-width: 768px) {
            font-size: 1.4rem;
        }
    }
    .page {
        background-color: var(--light-blue);
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        padding: 2.5rem 0 7rem 0;
        & img {
            width: 100%;
            max-width: 55rem;
        }
        @media screen and (max-width: 768px) {
            padding: 1.5rem 0 3rem 0rem;
        }
    }
</style>
