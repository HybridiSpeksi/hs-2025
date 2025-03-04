<script lang="ts">
    export let title: string;
</script>

<div class="newspaper-title">
    <h1>{title}</h1>

    <hr class="line" />
    <hr class="line" />
    <hr class="line" />
</div>

<style lang="scss">
    .newspaper-title {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-family: 'IM Fell English', serif;
        padding: 1rem 0;

        h1 {
            margin: 0;
            padding: 0;
            font-size: 2.5rem;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
        }
    }

    .line {
        max-width: 100%;
        width: 100%;
        height: 1px;
        background-color: black;
        margin: 0;
        padding: 0;
    }
</style>
