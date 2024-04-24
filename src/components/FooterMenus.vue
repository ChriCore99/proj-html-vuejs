<script>
    import { faInternetExplorer } from '@fortawesome/free-brands-svg-icons';
    import { store } from '../store.js'

    export default {
        data(){
            return {
                contactUs: store.contactUs,
                supportUs: store.supportUs,
                explore: store.explore, 
                visit: store.visit
            }
        }
    }
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <h3>Contact Us</h3>
                    <ul v-for="contact in contactUs"> 
                        <li>
                            <a :href="contact.src">
                                <font-awesome-icon class="icon" :icon="[`${contact.icon}`,`${contact.icon2}`]" /> {{ contact.text }} </a>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <h3>Support Us</h3>
                    <ul v-for="voice in supportUs"> 
                        <li>
                            <a :href="voice.src">
                                <font-awesome-icon class="icon" :icon="[`${voice.icon}`,`${voice.icon2}`]" /> {{ voice.text }} </a>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <h3>Explore</h3>
                    <ul v-for="voice in explore"> 
                        <li>
                            <a :href="voice.src">
                                <font-awesome-icon class="icon" :icon="[`${voice.icon}`,`${voice.icon2}`]" /> {{ voice.text }} </a>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <h3>Visit</h3>
                    <ul v-for="voice in visit"> 
                        <li>
                            <a :href="voice.src">
                                <font-awesome-icon class="icon" :icon="[`${voice.icon}`,`${voice.icon2}`]" /> {{ voice.text }} </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section {
        background-color: #192735;
        padding-bottom: 70px;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .row {
        display: flex;
    }

    .col-3 {
        width: calc(100% / 4);
    }

    h3 {
        margin-bottom: 25px;
        color: white;
        font-size: 20px;
    }

    li {
        margin-bottom: 10px;
    }

    li, li.icon {
        color: #a3b5ca;

        &:hover {
            color: #ff3a2d;
            transform: translateX(10px);
        }
    }
</style>