<script lang="ts">
    import Newspaper from '$lib/components/newspaper_juvu/Newspaper_juvu.svelte';
    import NewsSection from '$lib/components/newspaper_juvu/NewsSection_juvu.svelte';
    import Logo_juvu from '$lib/images/juvuspeksi/Logo_juvu.svg';
    import Sponsors from '$lib/components/Sponsors.svelte';
    export let data;
    let y: number;

    type ImageRef = {
        updateVisibility?: (scrollY: number) => void;
    } | null;

    let imageRefs: ImageRef[] = [];
    $: if (typeof y !== 'undefined') {
        imageRefs.forEach((ref) => {
            if (ref && ref.updateVisibility) {
                ref.updateVisibility(y);
            }
        });
    }
</script>

<svelte:window bind:scrollY={y} />

<main class="page">
    <Newspaper hasTitleOf="HybridiSpeksin 10 v. juhlavuosispeksi esittää:" pageNumber="1">
        <img src={Logo_juvu} class="logo" alt="Juhlavuosispeksin produktion logo" />
	<NewsSection>
	<p>HybridiSpeksin juhlavuosiproduktio 2025 nousee Manillan Aurinkobaletin lavalle lokakuun neljäntenä viikonloppuna neljän näytöksen voimin:</p>
	</NewsSection>
        <div class="schedule">
            <ul>
                <li>24.10. klo 18</li>
                <li>25.10. klo 14</li>
                <li>25.10. klo 19</li>
                <li>26.10. klo 14</li>
            </ul>
        </div>

        <NewsSection>
            <p>
               Vuosikymmennen kestäneen kevään jäljiltä maapallon ilmakehä on haihtumassa avaruuteen ja ihmiskunnan kohtalo roikkuu hiuskarvan varassa. Voisiko ratkaisu löytyä menneisyyden reliikistä; sääsingosta?
Intohimoinen Tuomi suostuttelee mukaansa entisen yhtiökumppaninsa Junon. Yhdessä he kasaavat tiimin maailman parhaista osaajista ratkaisemaan ongelmaa, mutta yhteen hiileen puhaltaminen ei ehkä olekaan mikään helppo tehtävä.

            </p>
	<p> 
	 Tule selvittämään kenen idea ratkaisee maapallon kohtalon ja kuka on valmis saavuttamaan tavoitteensa keinoja kaihtamatta. Voidaanko maapallo vielä pelastaa?
	</p>

	<p>
	Juhlavuosiproduktion lipunmyynti aukeaa 24.9.2025. Omstartteja huutamaan toivotaan sankoin joukoin sekä entisiä ja nykyisiä hybridispeksaajia sekä HybridiSpeksin faneja vuosien varrelta.
	</p>
</NewsSection>
	<div class="link">
	<p>
	<a href="https://kide.app/community/d96376eb-02ff-4b1b-be75-a959f0fe0c42">Linkki lippukauppaan</a></p>
	</div>
</Newspaper>
</main>

<Sponsors sponsors={data.sponsors} />

<style lang="css">
    .page {
        width: 100%;
        background-color: #636159;
        padding-top: 6rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .schedule {
        margin: 0 auto;
        text-align: center;
    }

    .schedule p {
        text-align: center;
        margin-bottom: 0.5rem;
    }

    .schedule ul {
        list-style-type: none;
        padding: 0;
        margin: 0 auto;
    }
    .schedule li {
        font-size: 1.1rem;
        margin-bottom: 0.2rem;
        @media screen and (min-width: 768px) {
            font-size: 1.35rem;
        }
    }
    .link p {
	font-size: 1.5rem;
	text-align: center;
	margin-bottom: 0.5rem;
	}

    :global(.newspaper-image) {
        width: 35rem;
        margin: 0 auto 1rem auto;
    }

    .logo {
        width: 35rem;
        margin: 60 auto 2rem auto;
    }
</style>
