<script>
    export default {
        data(){
            return{

            }
        },

        props: {
            HeaderLink: {
                type: Object
            }
        }
    }
</script>

<template>
    <section class="navbar">
        <div class="container">
            <ul class="row">
                <li>
                    <img src="../../public/img/logo.jpg" alt="">
                </li>
            </ul>
            <ul class="row">
                <li class="col" v-for="link in HeaderLink">
                    <a :href="link.src">{{ link.nome }}</a>
                </li>
            </ul>
        </div>
    </section>

</template>

<style lang="scss" scoped>
    .container {
        height: 75px;
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        min-width: 600px;
        margin: 0 auto;
    }

    .row {
        display: flex;
        gap: 35px;
    }

    .col {
        margin-top: 25px;

        &:hover{
            color: #ff3a2d;

            :after {
            content: "";
            border-bottom: 2px solid #ff3a2d;
            width: 20px;
            display: block;
            padding: 0px;
            } 
        }
    }

    .navbar img {
        width: 150px; 
        z-index: 999;
        position: absolute;
    }

</style>