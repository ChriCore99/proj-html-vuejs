<script>

</script>

<template>
    <!-- subscribe button -->
    <section class="finalInfos">
        <div class="container newsLetter">
            <div class="row">
                <div class="col-6">
                    <ul class="sub">
                        <li class="subscribe">Subscribe to our newsleter</li>
                        <li class="registerBtn">Register</li>
                    </ul>
                </div>
                <div class="col-6">
                    <ul class="subInfo">
                        <li class="longText"> <span>Insights is Picwik</span> University's thought leadership publication for sharing knowledge on management, tecnology and innovation. </li>
                        <li>Take me there ></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- menus and infos -->
    <section>
        
    </section>
</template>

<style lang="scss" scoped>

    // subscribe button
    .finalInfos {
        background-color: #192735;
        padding-top: 75px;
        padding-bottom: 65px;
    }

    .newsLetter {
        border: 1px solid black;
        max-width: 1200px;
        min-width: 600px;
        margin: 0 auto;
        height: 170px;
        box-shadow: 2px 2px 15px 10px;
        background-color: #192735;
        

        .row {
            display: flex;
            height: 60px;
            width: 1000px;
            margin: 0 auto;
            margin-top: 55px;
        }
    }

    .sub {
            display: flex;
            line-height: 60px;
        }

    .subInfo {
        width: 500px;

        span {
            color: #ff3a2d;
            border-bottom: 1px solid white;
        }
    }

    .longText {
        margin-bottom: 10px;
    }

    .subInfo li {
        color: white;
        font-size: 15px;
    }

    .subscribe {
        width: 280px;
        text-align: center;
        background-color: white;
        cursor: pointer;
    }

    .registerBtn {
        width: 120px;
        text-align: center;
        background-color: #d74d52;
        color: white;
        cursor: pointer;
        margin-right: 65px;
    }

    // menus and infos


</style>