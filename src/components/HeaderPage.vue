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
</template>

<style lang="scss" scoped>
    .container {
        height: 75px;
        display: flex;
        justify-content: space-between;
        width: 1200px;
        margin: 0 auto;
    }

    .row {
        display: flex;
        gap: 35px;
    }

    .col {
        margin-top: 25px;

        &:after {
        content: "";
        border-bottom: 2px solid #ff3a2d;
        width: 20px;
        display: block;
        padding: 0px;
        } 

        &:hover{
            color: #ff3a2d;
        }
    }

    img {
        width: 150px;
    }
</style>