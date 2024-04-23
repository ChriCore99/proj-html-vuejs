<script>

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <img class="fotoSvg" src="../../public/img/svg-0.svg" alt="">
            </div>
            <div class="col-4">
                <img class="fotoSvg" src="../../public/img/svg-1.svg" alt="">
            </div>
            <div class="col-4">
                <img class="fotoSvg" src="../../public/img/svg-2.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .row {
        max-width: 1200px;
        min-width: 600px;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
    }

    .col-4 {
        width: calc((100% - 100px) / 3);
        display: flex;
        justify-content: center;
        border: 1px solid black;
    }

    .fotoSvg {
        aspect-ratio: 1;
        width: 65px;
    }
</style>