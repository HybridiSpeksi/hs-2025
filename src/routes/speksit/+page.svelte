<script>
    import logo from '$lib/images/logo_white.avif';
</script>

<section class="global-wrap">
    <img class="logo" src={logo} alt="HybridiSpeksin logo" />
    <div class="text">
        <p>Tänne voisi laittaa tietoa Spekseistä yleisesti</p>
        <div class="speksit">
            <a href="https://spex.abo.fi/">
                <img src="/images/turun-speksit/abospex.svg" alt="Akademiska Spexet" />
                <h3>Akademiska<br />Spexet</h3>
            </a>
            <a href="http://turkulainenhumanistispeksi.fi/">
                <img src="/images/turun-speksit/humanisti.svg" alt="Turkulainen humanistispeksi" />
                <h3>Turkulainen<br />humanistispeksi</h3>
            </a>
            <a href="https://iospeksi.fi/">
                <img src="/images/turun-speksit/io.svg" alt="I/O Speksi" />
                <h3>I/O-Speksi</h3>
            </a>
            <a href="https://lex.fi/toiminta/spex">
                <img src="/images/turun-speksit/lex.svg" alt="LexSpex" />
                <h3>LexSpex</h3>
            </a>
            <a href="http://tlksspeksi.fi/">
                <img src="/images/turun-speksit/tlks.svg" alt="TLKS Speksi" />
                <h3>TLKS Speksi</h3>
            </a>
            <a href="http://speksi.tuky.fi/">
                <img src="/images/turun-speksit/tuky.svg" alt="TuKY Speksi" />
                <h3>TuKY Speksi</h3>
            </a>
        </div>
    </div>
</section>

<style lang="scss">
    h3 {
        text-align: center;
    }
    section.global-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .text {
            max-width: 50vw;
            text-align: justify;
        }
        .logo {
            max-width: 16rem;
            object-fit: contain;
        }
        @media only screen and (max-width: 767px) {
            .text {
                max-width: 85vw;
            }
            :global(p) {
                font-size: 1rem;
            }
            .logo {
                width: 60vw;
                height: 60vw;
            }
        }
    }
    .speksit {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            text-decoration: none;
        }
        img {
            width: 150px;
            height: 150px;
        }
    }
</style>
