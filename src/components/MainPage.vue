<script>
    import Cards1Component from './Cards1Component.vue'
    import MacchieCard from './MacchieCard.vue'
    import BigImages from './BigImages.vue'
    import MainCourses from './MainCourses.vue'

    export default {
        data(){
            return{

            }
        },

        components: {
            Cards1Component,
            MacchieCard,
            BigImages,
            MainCourses,
        }
    }
</script>

<template>
    <!-- immagine di sfondo grnade -->
    <section class="introAndLearn">
        <div class="container BackgroundImg">
            <div class="row">
                <div class="col">
                    <h1>
                        Professional Development For <br />
                        Coaches And Leaders
                    </h1>
                    <div class="btnContainer">
                        <p>Learn More</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- testo prime card -->
    <section class="firstCardInfo">
        <h2 class="promotionalTitle">
            Since 2000, weve been partnering with education leaders to <br><span>increase equity and achievement</span> for all students
        </h2>
    </section>

    <!-- prime card -->
    <Cards1Component />

    <!-- info soto card -->
    <MacchieCard />

    <!-- corsi principali -->
    <MainCourses />

    <!-- foto esormi prima del footer -->
    <BigImages />
</template>

<style lang="scss" scoped>
.fotoLearnMore {
  z-index: -1;
}

.BackgroundImg {
    height: 1000px;
    background-image: url(/public/img/02_Landing-Page.jpg);
    background-size: contain;
    background-repeat: no-repeat;
}

h1 {
    font-size: 50px;
    text-align: center;
    padding-top: 270px;
}

p {
    border: 1px solid black;
    width: fit-content;
    padding: 10px 25px 10px 25px;
    cursor: pointer;

    &:hover {
        background-color: #d74d52;
        color: white;
    }
}

.btnContainer {
    display: flex;
    justify-content: center;
    margin-top: 60px;
}

.promotionalTitle {
    font-size: 30px;

    span {
        color: #ff3a2d;
    }
}

.firstCardInfo {
    text-align: center;
    margin-bottom: 70px;
}
</style>
