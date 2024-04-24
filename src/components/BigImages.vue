<script>

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-3 tower"></div>
            <div class="col-3 people">
                <div class="fotoHover">
                    <h3>Driving Innovation</h3>
                </div>
            </div>
            <div class="col-3 house"></div>
            <div class="col-3 stadium"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .row {
        display: flex;
        height: 300px;
    }

    .tower {
        background-image: url(/public/img/gallery-3-3.jpg);
        background-size: cover;
    }

    .people {
        background-image: url(/public/img/news-3-2.jpg);
        background-size: cover;
    }

    .fotoHover {
        height: 100%;
        display: block;
        background-color: #d74d52;
        opacity: 0;

        &:hover {
            opacity: 0.8;
        }
    }

    h3 {
        font-size: 25px;
        color: white;
        text-align: center;
        padding-top: 150px;
    }

    .house {
        background-image: url(/public/img/gallery-1-3.jpg);
        background-size: cover;
    }

    .stadium {
        background-image: url(/public/img/gallery-2-3.jpg);
        background-size: cover;
    }

    .col-3 {
        width: calc(100% / 4);
    }
</style>