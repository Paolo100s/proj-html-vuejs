<script>
import { store } from '../store';

export default {
    name: 'PageFooter',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="line">
    </div>

    <div class="up_footer">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h5>ABOUT</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias perspiciatis quibusdam
                        asperiores!
                        Quidem accusamus inventore impedit distinctio recusandae quae.</p>
                    <div>
                        <img src="../assets/img/movers/avada-movers-logo.png" alt="img">
                    </div>
                </div>
                <div class="col">
                    <h5>AVADA MOVERS</h5>
                    <ul>
                        <li v-for="_ in store.moversList"><a href="#">> {{ _ }}</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h5>RECENT POSTS</h5>
                    <ul>
                        <li v-for="_ in store.posts"><a href="#">> {{ _ }}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="down_footer">
        <div class="container">
            <div>
                <span>Copyright 2012 - 2020 : Avads Theme by ThemeFusion | All Rights Reserved | Powered by WordPress
                </span>
            </div>
            <div>
                <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-youtube" /></a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/general.scss';

.line {
    height: 10px;
    background-color: $secondary;
}

.up_footer {
    padding: 50px 0;

    .row {
        gap: 20px;
    }

    .col {
        flex-basis: calc((100% / 3) - 20px);
    }

    p {
        padding: 20px 0 40px;
        font-size: 14px;
    }

    li {
        padding-top: 20px;
    }

    a {
        color: $black;

        &:hover {
            color: $secondary;
        }
    }
}

.down_footer {
    height: 80px;
    background-color: $secondary;
    text-align: center;
    color: $white;

    .container {
        div {
            padding: 10px 0;
        }
    }

    span {
        font-size: 12px;

    }

    a {
        color: $white;
        padding-right: 15px;
    }
}
</style>