<script>
import { store } from '../store';

export default {
    name: 'PageHeader',
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <div class="up_header">
        <div class="container">
            <div class="row">
                <div>
                    <span>
                        <font-awesome-icon icon="fa-solid fa-phone-flip" /> Call us for a Free Quote: 1.800.555.6789
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
    </div>
    <div class="hero">
        <div class="container">
            <div class="row">
                <div>
                    <img src="../assets/img/movers/avada-movers-logo.png" alt="img">
                </div>
                <div class="pagesList">
                    <ul>
                        <li v-for="page in store.pagesList"><a href="#">{{ page }}</a></li>
                    </ul>
                    <button>FREE QUOTE</button>
                </div>
            </div>
            <div class="title">
                <h6>MOVING WITHOUT THE HASSLE</h6>
                <h1>WE MAKE IT SIMPLE</h1>
                <h6>PROFESSIONAL SERVICE WITH QUALITY AND CUSTOMER SATISFACTION</h6>
            </div>
        </div>
    </div>
    <div class="cta">
        <h5><a href="#"><font-awesome-icon icon="fa-solid fa-paper-plane" /> GET A FREE QUOTE ONLINE NOW!</a></h5>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/general.scss';

.up_header {
    background-color: $secondary;
    color: $white;
    padding: 10px 0;

    a {
        color: $white;
        padding-left: 15px;
    }
}

.hero {
    background-image: url('../assets/img/movers/avada-movers-homeherobackground-final.jpg');
    height: 450px;
    background-size: cover;

    .row {
        padding-top: 10px;
    }

    .pagesList {
        align-self: center;
        display: flex;

        ul {
            display: flex;
            padding-top: 5px;
        }

        a {
            color: $black;
            padding: 0 15px;
            font-weight: bolder;

            &:hover {
                color: $secondary;
            }
        }

        button {
            align-self: center;
            font-weight: bold;
            padding: 7px 20px;
        }
    }

    .title {
        text-align: center;
        padding: 120px;

        h6 {
            color: $grey;
            font-weight: bolder;
        }

        h1 {
            font-weight: 900;
            padding: 15px 0;
        }
    }

}

.cta {
    height: 70px;
    background-color: $primary;
    text-align: center;
    line-height: 70px;
    vertical-align: middle;

    h5 {
        font-weight: 100;
    }

    a {
        color: $white;
    }
}
</style>