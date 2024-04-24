<script>

</script>

<template>
    <section class="infoCorsi">
        <div class="container">
            <div class="info">
                <h2>Recent Courses</h2>
                <p> Whether you're considering a  foundation course or an undergraduated degree master's <br>
                    or a PhD, academics is a place where students thrive.
                </p>
            </div>
        </div>
    </section>

    <section class="corsiCards">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="cardImgStud"></div>
                    <ul>
                        <li class="item1">Free</li>
                        <li class="item2">UI Animation using Sketch 3, <br>Principle App, and Flinto</li>
                        <li class="item3">
                            This online photography course will <br>teach you how to take amazing <br>images and even sell...
                        </li>
                        <li class="item4">Coursed by: University</li>
                    </ul>
                </div>
                <div class="col-4">
                    <div class="cardImgPc"></div>
                    <ul>
                        <li class="item1">Free</li>
                        <li class="item2">The Ultimate Drawing Course <br>- Beginner to Advanced</li>
                        <li class="item3">
                            This online photography course will <br>teach you how to take amazing <br>images and even sell...
                        </li>
                        <li class="item4">Coursed by: University</li>
                    </ul>
                </div>
                <div class="col-4">
                    <div class="cardImgCam"></div>
                    <ul>
                        <li class="item1">Free</li>
                        <li class="item2">Your Complete Guide to <br>Photography</li>
                        <li class="item3">
                            This online photography course will <br>teach you how to take amazing <br>images and even sell...
                        </li>
                        <li class="item4">Coursed by: University</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    // testo corsi
    .infoCorsi {
        margin-bottom: 70px;
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .info {
        text-align: center;
    }

    h2 {
        font-size: 30px;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
    }

    // card corsi

    .corsiCards {
        margin-bottom: 70px;
    }

    .corsiCards .row {
        display: flex;
        justify-content: space-between;
    }

    .corsiCards .col-4 {
        width: calc((100% - 100px) / 3);
        box-shadow: 6px 2px 15px 13px #EEEEEE;
    }

    .cardImgStud {
        height: 200px;
        background-image: url(/public/img/bruce-mars-FWVMhUa_wbY-unsplash.jpg);
        background-size: cover;
    }

    .cardImgPc {
        height: 200px;
        background-image: url(/public/img/course-1-2.jpg);
        background-size: cover;
    }

    .cardImgCam {
        height: 200px;
        background-image: url(/public/img/william-thomas-ny6tO4ItOEY-unsplash.jpg);
        background-size: cover;
    }

    li {
        margin-left: 10px;
    }

    .item1 {
        margin-top: 30px;
        margin-bottom: 15px;
        font-weight: bold;
        font-size: 18px;
    }

    .item2 {
        font-weight: bold;
        font-size: 20px;
    }

    .item3 {
        margin-top: 15px;
        margin-bottom: 35px;
        font-size: 18px;
    }

    .item4 {
        color: #ff3a2d;
        margin-bottom: 20px;
    }
</style>