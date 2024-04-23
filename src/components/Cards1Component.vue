<script>

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <img class="fotoSvg" src="../../public/img/svg-0.svg" alt="">
                <p class="miniTitle">Online Coaching</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis, accusamus officiis fugiat.</p>
            </div>
            <div class="col-4">
                <img class="fotoSvg" src="../../public/img/svg-1.svg" alt="">
                <p class="miniTitle">Consultation</p>
                <p class="Ptext">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis, accusamus officiis fugiat.</p>
            </div>
            <div class="col-4">
                <img class="fotoSvg" src="../../public/img/svg-2.svg" alt="">
                <p class="miniTitle">Life Programs</p>
                <p class="Ptext">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis, accusamus officiis fugiat.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
        flex-direction: column;
        align-items: center;
        border: 1px solid black;

        p {
            font-size: 20px;
            text-align: center;
        }
    }

    .miniTitle {
        font-weight: bold;
        margin: 25px 0px;
    }

    .Ptext {
        margin-bottom: 75px;
    }

    .fotoSvg {
        aspect-ratio: 1;
        width: 65px;
        margin-top: 30px;
    }
</style>