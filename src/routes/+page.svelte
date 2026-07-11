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


<style lang="scss">
    h2 {




<div class="video-container">
<div>
<h2>
Katso tästä teaser!
</h2>

			<Video
				videoURL="https://www.youtube.com/embed/r3I5hkt0-MI"
				code="https://i.ytimg.com/vi/r3I5hkt0-MI/maxresdefault.jpg" />
	</div>



<div>

<h2>
Ja tästä trailer!
</h2>

			<Video 
				videoURL="https://www.youtube.com/embed/BwOgh20Odao"
				code="https://i.ytimg.com/vi/BwOgh20Odao/hqdefault.jpg" />
	</div>
</div>




<h2> Kuka kilpailijoista olet? </h2>
<p> Testaa alla olevan kyselyn avulla, keihin näytelmän hahmoista samastut eniten! </p>



<Quizz id={quizz_id} />


</div>


</main>


<Sponsors sponsors={data.sponsors} />

<style lang="css">

    h1 {
	color: #FFFFFF;
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
        padding: 1rem 1.4rem;
	margin-top: 0rem;
        margin-bottom: 1.5rem;
        color: #FFFFFF;
	border-style: solid;
	border-color: #FFFFFF;
        position: relative;
        overflow: hidden;
        background-color: #000000;
        max-width: 1000px;
        width: 85%;
	height: auto;}
    
h2 {
	color: var(--white);
        margin: 0;
        text-align: center;
	font-family: SimSun;
        width: 100%;}



   .page {
	background: url("$lib/images/2026/Nettisivutausta.png");
	background-repeat: repeat;
        width: 100%;
        padding-top: 6rem;
        margin: 0 auto;
        display: flex; 
  	justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding: 2.5rem 0 7rem 0;
        & img {
	    padding-left: 17%;
            width: 83%;
            max-width: 55rem;
        }
        @media screen and (max-width: 768px) {
            padding: 1.5rem 0 3rem 0rem;
        }
    }
</style>
