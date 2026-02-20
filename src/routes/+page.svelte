<script lang="ts">
    import Logo_2026 from '$lib/images/2026/HS26logo.svg';
    import Sponsors from '$lib/components/Sponsors.svelte';
    import kuvituskuva1 from '$lib/images/2026/kuvituskuva1.png'
    import kuvituskuva2 from '$lib/images/2026/kuvituskuva2.png'
    import kuvituskuva3 from '$lib/images/2026/kuvituskuva3.png'
    import Video from '$lib/components/Video.svelte';
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
<h1>
HybridiSpeksi 2026 esittää:
</h1>

        <img src={Logo_2026} class="logo" alt="Ylin oppinut -produktion logo" />

<div class="schedule">
            <p>Näytökset esitetään Turussa Manilla-teatterilla</p>
            <ul>
        <li>pe 20.3. klo 19</li>
	<li>la 21.3. klo 14</li>
	<li>ma 23.3. klo 19</li>
	<li>ti 24.3. klo 19</li>
	<li>ke 25.3. klo 19</li>
	<li>to 26.3. klo 19</li>
	<li>pe 27.3. klo 19</li>
	<li>la 28.3. klo 14</li>

            </ul>
            <p>sekä Tampereella Messukylän työväentalolla</p>
            <ul>
                <li>la 18.4. klo 17</li>
            </ul>
<p> Lipunmyynti aukeaa 26.2 klo 14.00 </p>
</div> 

<div class ="synopsis">
<img src={kuvituskuva1} class="kuvitus" />

<p>
Valot, kamera, action! Kuusi rohkeaa, upeaa ja varsinkin sivistynyttä kilpailijaa eri lähtökohdista esittelee taitojaan tässä upouudessa kisaohjelmassa, jota ei TV:ssä ole aiemmin nähty! Tule katsomaan, kuinka kilpailijoita koetellaan mitä moninaisimmissa tehtävissä, jotka ovat täynnä jännitystä ja odottamattomia käänteitä! Pärjäämiseen tarvitaan älyä, voimaa ja luovuutta, kun vain yksi voi voittaa!
</p>

<img src={kuvituskuva2} class="kuvitus" />
<p>
Mutta... entä jos kulissien takana kaikki ei olekaan sitä, miltä näyttää? Entä jos viihdeteollisuuden pyörät eivät pyörikään tehokkaasti? Paljastuuko tärkeimmäksi valttikortiksi sittenkin yhteistyö? Löytävätkö kilpailijamme anteeksiannon avaimet? 
</p>
<img src={kuvituskuva3} class="kuvitus" />
</div>

<h2>
Katso tästä teaser!
</h2>
	<div class="video-container">
			<Video
				videoURL="https://www.youtube.com/embed/r3I5hkt0-MI"
				code="r3I5hkt0-MI" />
	</div>



</main>


<Sponsors sponsors={data.sponsors} />

<style lang="css">
    h1 {
	color: FFFFFFF;
        margin: 0;
		font-family: SimSun;
	font-size: 4rem;
        text-align: center;
        width: 100%;}
    
h2 {
	color: FFFFFFF;
        margin: 0;
		font-family: SimSun;

        text-align: center;
	font-family: SimSun;
        width: 100%;}
    
h2 {
	color: var(--white);
        margin: 0;
        text-align: center;
	font-family: SimSun;
        width: 100%;}



    .page {
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("$lib/images/2026/Nettisivutausta.png");
	background-repeat: repeat;
        width: 100%;
        padding-top: 6rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .schedule {
        margin: 50 auto;
        text-align: center;
    }

    .schedule p {
	font-size: 2rem;
	font-family: SimSun;
        text-align: center;
        margin-bottom: 0.5rem;
    }

    .schedule ul {
        list-style-type: none;
        padding: 0;
        margin: 0 auto;
    }
    .schedule li {
        font-size: 1.8rem;
        margin-bottom: 0.2rem;
	font-family: SimSun;
    }
	.video-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px 0;
		margin-bottom: 5rem;
	}
    .synopsis {
        margin: 50 auto;
        text-align: center;
	max-width: 100%;
  	height: auto;
    }

    .synopsis p {
	width: 50rem;
	font-size: 2rem;
	font-family: SimSun;
        margin: 60 auto 2rem auto;
        margin-bottom: 0rem;
	margin-top: 0rem;
	max-width: 100%;
  	height: auto;
    }

    .kuvitus{
        width: 50rem;
        margin: 60 auto 2rem auto;
	max-width: 100%;
  	height: auto;
}	
    .link p {
	font-size: 1.5rem;
	text-align: center;
	margin-bottom: 0.5rem;
	}

    .logo {
        width: 50rem;
        margin: 60 auto 2rem auto;
	margin-bottom: 5rem; 
	max-width: 100%;
  	height: auto;
    }


</style>


