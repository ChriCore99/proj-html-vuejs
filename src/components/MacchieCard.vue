<script>

</script>

<template>
    <div class="container Macchie">
        <div class="row">
            <div class="col-4">
                <ul>
                    <li>
                        <h3 class="DatiNum Arancio">6500</h3>
                    </li>
                    <li class="simbol"> <font-awesome-icon :icon="['fas', 'plus']" style="color: #f28202;" /> </li>
                    <li class="DatiText">Students</li>
                </ul>
            </div>
            <div class="col-4">
                <ul>
                    <li>
                        <h3 class="DatiNum Rosso">200</h3>
                    </li>
                    <li class="simbol"> <font-awesome-icon :icon="['fas', 'plus']" style="color: #ff3a2d;" /> </li>
                    <li class="DatiText">Online Curses</li>
                </ul>
            </div>
            <div class="col-4">
                <ul>
                    <li>
                        <h3 class="DatiNum Verde">100</h3>
                    </li>
                    <li class="simbol"> <font-awesome-icon :icon="['fas', 'percent']" style="color: #3adc79;" /> </li>
                    <li class="DatiText">Happy Clients</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .Macchie {
        margin-top: 50px;
    }

    .row {
        max-width: 1200px;
        min-width: 600px;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
    }

    .col-4 {
        width: calc((100% - 100px) / 3);
    }

    ul {
        display: flex;

        li {
            height: 80px;
            line-height: 50px;
        }
    }

    h3 {
        width: 80px;
        text-align: center;
        margin-left: 25px;
    }

    .DatiNum {
        font-size: 35px;
    }

    .simbol {
        font-size: 30px;
        margin: 0px 10px;
    }

    .Arancio {
        background-image: url(/public/img/counter-shape-1-1-1.png);
        background-size: contain;
        background-repeat: no-repeat;
        color: #f28202;
    }

    .Rosso {
        background-image: url(/public/img/counter-shape-2-1-1.png);
        background-size: contain;
        background-repeat: no-repeat;
        color: #ff3a2d;
    }

    .Verde {
        background-image: url(/public/img/counter-shape-3-1-1.png);
        background-size: contain;
        background-repeat: no-repeat;
        color: #3adc79;
    }

    .DatiText {
        font-size: 20px;
        font-weight: bold;
    }
</style>