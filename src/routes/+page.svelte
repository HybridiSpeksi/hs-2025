<script lang="ts">
    import Logo_2026 from '$lib/images/2026/HS26logo.svg';
    import Sponsors from '$lib/components/Sponsors.svelte';
    import kuvituskuva1 from '$lib/images/2026/kuvituskuva1.png'
    import kuvituskuva2 from '$lib/images/2026/kuvituskuva2.png'
    import kuvituskuva3 from '$lib/images/2026/kuvituskuva3.png'
    import Video from '$lib/components/Video.svelte';
    import Quizz from '$lib/components/Quizz_2026.svelte';
    export let data;
    let y: number;
    let quizz_id = 5;

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
<div class= "näyttö">
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
	<div class="link">
	<p>
	<a href="https://kide.app/community/d96376eb-02ff-4b1b-be75-a959f0fe0c42/events">Linkki lippukauppaan</a></p>
	</div>
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
				code="$lib/images/2026/traileri.jpg" />
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
	font-family: SimSun;
	font-size: 3.4rem;
	margin-top: 3rem;
        text-align: center;
	max-width: 100%;
	height: auto;}
    
h2 {
	color: #FFFFFF;
        margin: 0;
		font-family: SimSun;

        text-align: center;
	font-family: SimSun;
	max-width: 100%;
	height: auto;}
    
.näyttö {
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
    }
p {	color: #FFFFFF;
	font-size: 1.3rem;
        text-align: center;
	font-family: SimSun;
        width: 100%;
}
    .schedule {
        margin: 50 auto;
        text-align: center;
	max-width: 100%;
	height: auto;
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
	padding: 10px 0;
	margin-bottom: 5rem;
	}

.video-container div {
	width:50%;
	float:left;
        display: flex; 
  	justify-content: center;
        flex-direction: column;
        align-items: center;
}




    .synopsis {
        margin: 50 auto;
        text-align: center;
	max-width: 100%;
  	height: auto;

    }

    .synopsis p {
	width: 50rem;
	max-width: 100%;
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
    
.link a {
	color: #FFFFFF}



.link p {
	width: 50rem;
	max-width: 100%;
	font-size: 2rem;
	font-family: SimSun;
        margin: 60 auto 2rem auto;
        margin-bottom: 0rem;
	margin-top: 3rem;
	max-width: 100%;
	height: auto;
	}

    .logo {
        width: 50rem;
        margin: 60 auto 2rem auto;
	margin-bottom: 5rem; 
	max-width: 100%;
  	height: auto;
    }


</style>


