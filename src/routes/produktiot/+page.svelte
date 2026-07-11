<script lang="ts">
    import Sponsors from '$lib/components/Sponsors.svelte';
    export let data;
</script>

<div class="page">
    <section class="global-wrap">
        <h1>Aiemmat produktiot</h1>
<div class="timeline">
  <div class="container left">
    <div class="content">
      <h2>2017</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2016</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
</div>
    </section>
    <Sponsors sponsors={data.sponsors} />
</div>

<style lang="scss">
    h1 { 
	color: var(--black)
}
    .page {
        background-color: var(--white);
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

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: white;
  border: 4px solid #FF9F55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.left {
  left: 0;
}

.right {
  left: 50%;
}

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

.right::after {
  left: -16px;
}

.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

  .timeline::after {
    left: 31px;
  }


  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  .left::after, .right::after {
    left: 15px;
  }

  .right {
    left: 0%;
  }

</style>
