<script>
    import { store } from '../store.js'

    export default {
        data(){
            return {
                finalVoices: store.finalVoices
            }
        }
    }
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h5><font-awesome-icon class="icon" :icon="['far', 'copyright']" /> Copyright 2020 tophive. All Rights Reserved.</h5>
                </div>
                <div class="col">
                    <ul>
                        <li  v-for="voice in finalVoices">
                            <h5>{{ voice.text }}</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section {
        background-color: #15222e;
    }

    .container {
        max-width: 1200px;
        height: 50px;
        line-height: 50px;
        margin: 0 auto;
    }

    .row {
        display: flex;
        justify-content: space-between;
    }

    ul {
        display: flex;

        li {
            margin: 5px;
            line-height: 40px;
        }
    }

    h5 {
        color: #a3b5ca;
    }
</style>