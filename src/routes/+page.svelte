<script lang="ts">
    import Logo_2026 from '$lib/images/2026/HS26logo.svg';
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
<h1>
HybridiSpeksi 2026 Esittää:
</h1>

        <img src={Logo_2026} class="logo" alt="Ylin oppinut -produktion logo" />
</main>

<Sponsors sponsors={data.sponsors} />

<style lang="css">
    h1 {
	color: var(--white);
        margin: 0;
        text-align: center;
	font-family: Arial, sans-serif;
        width: 100%;}

    .page {
        width: 100%;
        background-color: #000123;
        padding-top: 6rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
	
    .link p {
	font-size: 1.5rem;
	text-align: center;
	margin-bottom: 0.5rem;
	}

    .logo {
    width: 50rem;
	max-width: 100%;
	height: auto;
    margin: 60 auto 2rem auto;
	margin-bottom: 15rem; 
    }
</style>


