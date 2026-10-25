<script lang="ts">
    export let data;
    import Video from '$lib/components/Video.svelte';
</script>

<main class="page">
        <h1> Inferno: Kunnes Kadotus meidät korjaa </h1>



</main>

<style lang="scss">
h1 {color: var(--black);
}
h2 {color: var(--black);
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

.video-container {
	width: 100%;
	padding: 10px 0;
	margin-bottom: 5rem;
	}

.video-container div {
	width:50%;
	float: left;
        display: flex; 
  	justify-content: center;
        flex-direction: column;
        align-items: center;
}
</style>
