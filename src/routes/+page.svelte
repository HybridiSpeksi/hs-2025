<script lang="ts">
    import Logo_2026 from '$lib/images/2026/HS26logo.svg';
    import Sponsors from '$lib/components/Sponsors.svelte';
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
HybridiSpeksi 2026 Esittää:
</h1>

        <img src={Logo_2026} class="logo" alt="Ylin oppinut -produktion logo" />
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
	color: var(--white);
        margin: 0;
		font-family: SimSun;

        text-align: center;
        width: 100%;}
    
h2 {
	color: var(--white);
        margin: 0;
        text-align: center;
	font-family: SimSun;
        width: 100%;}


    .page {
        width: 100%;
        background-color: #000000;
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
	font-size: 1.5rem;
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
        font-size: 1.4rem;
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
	
    .link p {
	font-size: 1.5rem;
	text-align: center;
	margin-bottom: 0.5rem;
	}

    .logo {
        width: 50rem;
        margin: 60 auto 2rem auto;
	margin-bottom: 5rem; 
    }


</style>


