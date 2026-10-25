<script lang="ts">
    export let data;
    import Video from '$lib/components/Video.svelte';
    import poster from '$lib/images/posterit/ylin_oppinut_juliste.svg'
</script>

<main class="page">
        <h1> Ylin Oppinut </h1>

<div>
<div class=poster>

<img src={poster}/>

</div>

<div class=synopsis>

<p>
Valot, kamera, action! Kuusi rohkeaa, upeaa ja varsinkin sivistynyttä kilpailijaa eri lähtökohdista esittelee taitojaan tässä upouudessa kisaohjelmassa, jota ei TV:ssä ole aiemmin nähty! Tule katsomaan, kuinka kilpailijoita koetellaan mitä moninaisimmissa tehtävissä, jotka ovat täynnä jännitystä ja odottamattomia käänteitä! Pärjäämiseen tarvitaan älyä, voimaa ja luovuutta, kun vain yksi voi voittaa!
</p>

<p>
Mutta... entä jos kulissien takana kaikki ei olekaan sitä, miltä näyttää? Entä jos viihdeteollisuuden pyörät eivät pyörikään tehokkaasti? Paljastuuko tärkeimmäksi valttikortiksi sittenkin yhteistyö? Löytävätkö kilpailijamme anteeksiannon avaimet? 
</p>




</div>
</div>
<div class="videos">
<div class=teaser>
<h2>
Teaser
</h2>

			<Video
				videoURL="https://www.youtube.com/embed/r3I5hkt0-MI"
				code="https://i.ytimg.com/vi/r3I5hkt0-MI/maxresdefault.jpg" />
	</div>



<div class=trailer>

<h2>
Trailer
</h2>

			<Video 
				videoURL="https://www.youtube.com/embed/BwOgh20Odao"
				code="https://i.ytimg.com/vi/BwOgh20Odao/hqdefault.jpg" />
	</div>
</div>


</main>

<style lang="scss">
h1 {
	color: var(--black);
}

h2 {
	color: var(--black);
}

p {
	color: var(--black);
	font-size: 1.3rem;
        text-align: left;
}

.synopsis {
	max-width: 100%;
	width: 50%;
	float: left;
        display: flex; 
  	justify-content: center;
        flex-direction: column;
        align-items: center;

}
    
.poster {
	width: 50%;
	float: left;
        display: flex; 
  	justify-content: center;
        flex-direction: column;
        align-items: center;

}

img {
	display: inline-block;
	max-width: 90%;
  	height: auto;
	object-fit: contain;
}
    
    .page {
        background-color: var(--white);
	position: relative;
	display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .page::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('$lib/images/logo_black.avif');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        opacity: 0.05;
    }

.videos {
	width: 100%;
	padding: 10px 0;
	margin-bottom: 5rem;
	}



.teaser{
	width: 50%;
	float: left;
        display: flex; 
  	justify-content: center;
        flex-direction: column;
        align-items: center;

}



.trailer{
	width: 50%;
	float: left;
        display: flex; 
  	justify-content: center;
        flex-direction: column;
        align-items: center;

}


</style>
