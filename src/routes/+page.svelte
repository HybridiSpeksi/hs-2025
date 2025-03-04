<script lang="ts">
    import Newspaper from '$lib/components/newspaper/Newspaper.svelte';
    import NewsSection from '$lib/components/newspaper/NewsSection.svelte';
    import AnimatedImage from '$lib/components/AnimatedImage.svelte';
    import logo2025 from '$lib/images/2025/logo-2025.avif';
    import katukuva from '$lib/images/2025/Lehtikuva_katu_ja_peikko.avif';
    import eetos from '$lib/images/2025/Lehtikuva_työhuone_ja_Eetos.avif';
    import tyrsky from '$lib/images/2025/Lehtikuva_satama_ja_Tyrsky.avif';
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
    <Newspaper hasTitleOf="HybridiSpeksi 2025 esittää: " pageNumber="1">
        <img src={logo2025} class="logo" alt="Kippis ja Kavallus -produktion logo" />
        <div class="schedule">
            <p>Näytökset Turussa Manilla-teatterilla:</p>
            <ul>
                <li>Pe 21.3. klo 19</li>
                <li>La 22.3. klo 14</li>
                <li>Ma 24.3. klo 19</li>
                <li>Ti 25.3. klo 19</li>
                <li>Ke 26.3. klo 19</li>
                <li>To 27.3. klo 19</li>
                <li>Pe 28.3. klo 19</li>
                <li>La 29.3. klo 14</li>
            </ul>
            <p>sekä Tampereella Messukylän työväentalolla:</p>
            <ul>
                <li>La 5.4. klo 17</li>
            </ul>
            <p>
                <a
                    href="https://kide.app/community/d96376eb-02ff-4b1b-be75-a959f0fe0c42?fbclid=PAY2xjawIziJFleHRuA2FlbQIxMQABphJrj1S8MdMF9iyix32OtWYbvowOnuvguYqwCOH0IRQjvPXZ8Z3sKrOzQQ_aem_iv7Kiytaoi2Jwh81DGH0tA"
                    >Linkki Kide.app-lipunmyyntiin</a>
            </p>
        </div>
    </Newspaper>

    <Newspaper pageNumber="2">
        <NewsSection>
            <p>
                On synkkä ja myrskyinen yö kieltolain aikaisessa Turussa. Kävellessäsi sumuisilla
                kaduilla voit törmätä niin poliisiin kuin peikkoonkin. Jostain kaukaa saatat kuulla,
                kuinka nauru raikaa.
            </p>
        </NewsSection>

        <AnimatedImage
            src={katukuva}
            className="newspaper-image"
            alt="Pimeä katu ja vilahtava peikon häntä"
            bind:this={imageRefs[0]} />
    </Newspaper>

    <Newspaper pageNumber="3">
        <NewsSection>
            <p>
                Kun etsivän korviin kantautuu mysteeri, on aika metsästää punaista lankaa sataman
                valoissa. Mutta pian hän huomaa, että tämän palapelin palaset ovat pahasti sekaisin.
                Pitkän työpäivän lopuksi saattaa kunnon kahville olla tarvetta.
            </p>
        </NewsSection>

        <AnimatedImage
            src={eetos}
            className="newspaper-image"
            alt="Etsivä toimistossaan"
            bind:this={imageRefs[1]} />
    </Newspaper>

    <Newspaper pageNumber="4">
        <NewsSection>
            <p>
                Mihin suuntaan kapteenin kaukoputki osoittaa? Mitä salaisuuksia kätkeytyy
                tonttulakkien alle? Saadaanko faksi korjattua? Tule mukaan katsomaan vuoden 2025
                HybridiSpeksiä!
            </p>
        </NewsSection>

        <AnimatedImage
            src={tyrsky}
            className="newspaper-image"
            alt="Kapteeni tähystää kaukoputkella"
            bind:this={imageRefs[2]} />
    </Newspaper>
</main>
<Sponsors sponsors={data.sponsors} />

<style lang="css">
    .page {
        width: 100%;
        background-color: var(--bark);
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
            font-size: 1.2rem;
        }
    }

    :global(.newspaper-image) {
        width: 35rem;
        margin: 0 auto 1rem auto;
    }

    .logo {
        width: 25rem;
        margin: 0 auto 1rem auto;
    }
</style>
