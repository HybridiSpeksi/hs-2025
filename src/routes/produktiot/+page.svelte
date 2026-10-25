<script lang="ts">
    export let data;

</script>

<div class="page">
    <section class="global-wrap">
        <h1>Aiemmat produktiot</h1>

    </section>
<div class="timeline">
  <div class="container left">
<a href="/produktiot/2026/">
    <div class="content">
      <h2>Ylin oppinut</h2>
      <p>Lorem ipsum..</p>
    </div>
</a>
  </div>



  <div class="container right">
<a href="/produktiot/juvu/">
    <div class="content">
      <h2>Vaihto&shy;ehdot vähissä</h2>
      <p>Lorem ipsum..</p>
    </div>
</a>
  </div>


 <div class="container left">
<a href="/produktiot/2025/">
    <div class="content">
      <h2>Kippis ja kavallus</h2>
      <p>Lorem ipsum..</p>
    </div>
</a>
  </div>


  <div class="container right">
<a href="/produktiot/2024/">
    <div class="content">
      <h2>Kevät&shy;päivän&shy;seisaus</h2>
      <p>Lorem ipsum..</p>
    </div>
</a>
  </div>

  <div class="container left">
<a href="/produktiot/2023/">
    <div class="content">
      <h2>Kreivin aikaan</h2>
      <p>Lorem ipsum..</p>
    </div>
</a>
  </div>


  <div class="container right">
<a href="/produktiot/2022/">
    <div class="content">
      <h2>Inferno: Kunnes Kadotus meidät korjaa</h2>
      <p>Lorem ipsum..</p>
    </div>
</a>
  </div>

  <div class="container left">
<a href="/produktiot/2020/">
    <div class="content">
      <h2>2101: Avaruus&shy;risteily</h2>
      <p>Lorem ipsum..</p>
    </div>
</a>
  </div>



  <div class="container right">
<a href="/produktiot/2019/">
    <div class="content">
      <h2>Viimeinen lohikäärme&shy;isku</h2>
      <p>Lorem ipsum..</p>
    </div>
</a>
  </div>

  <div class="container left">
<a href="/produktiot/2018/">
    <div class="content">
      <h2>Älä ammu ohi</h2>
      <p>Lorem ipsum..</p>
    </div>
</a>
  </div>


  <div class="container right">
<a href="/produktiot/2017/">
    <div class="content">
      <h2>Kruunun kohtalo</h2>
      <p>Lorem ipsum..</p>
    </div>
</a>
  </div>


  <div class="container left">
<a href="/produktiot/2016/">
    <div class="content">
      <h2>Bratva&shy;Kontra</h2>
      <p>Lorem ipsum..</p>
    </div>
</a>
  </div>

  <div class="container right">
<a href="/produktiot/2015/">
    <div class="content">
      <h2>H.A.L.I</h2>
      <p>Lorem ipsum..</p>
    </div>
</a>
  </div>


</div>
    <section class="global-wrap">
    </section>
</div>





<style lang="scss">
    h1 { 
	color: var(--black);
}
    h2 { 
	color: var(--black);
	hyphens: manual;
	white-space: normal;  /* Ensures text wraps when necessary */
}
    p {
	color: var(--black);
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
    .page {

        background-color: var(--white);
	position: relative;

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
	background-attachment: fixed;
        opacity: 0.05;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        padding: 2.5rem 0 7rem 0;
        & img {
            width: 100%;
            max-width: 55rem;
        }
        @media screen and (max-width: 768px) {
            padding: 1.5rem 0 3rem 0rem;
        }
    }
* {
  box-sizing: border-box;
}

/* Set a background color */
body {
  background-color: #474e5d;
  font-family: Helvetica, sans-serif;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0px;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid #6D717A;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
/* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

/* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

/* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

/* Make sure all circles are at the same spot */
  .left::after, .right::after {
    left: 15px;
  }

/* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}

</style>