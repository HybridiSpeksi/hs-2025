<script lang="ts">
    import Sponsors from '$lib/components/Sponsors.svelte';
    export let data;
</script>

<div class="page">
    <section class="global-wrap">
        <h2>Rakennamme parhaillaan seuraavan HybridiSpeksin verkkosivua!</h2>
        <img
            src="/images/hiiri.avif"
            alt="Mouse in a hardhat building the new webiste"
            draggable="false" />
<h2> Huom. yhdistyksen jäsen! Olethan huomannut ilmoittautumisvaatimuksen? Lisätietoja saat kaikilta yhdistyksen viestintäkanavilta ja hallitukselta! Yhteystiedot löytyvät yhdeystiedot-sivulta</h2>
    </section>
    <Sponsors sponsors={data.sponsors} />
</div>


<style lang="css">

h2  {
	color: #FFFFFF;
        margin: 0;
        color: var(--black);
        text-align: center;
        font-weight: 600;

        @media screen and (max-width: 768px) {
            font-size: 1.4rem;
        }}

    .page {
        background-color: var(--light-blue);
  	justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding: 2.5rem 0 7rem 0;
        & img {
	    padding-left: 25%;
            width: 75%;
            max-width: 55rem;
        }
        @media screen and (max-width: 768px) {
            padding: 1.5rem 0 3rem 0rem;
        }
    }
</style>
</style>
