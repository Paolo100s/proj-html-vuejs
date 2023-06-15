<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
import AppTestimonial from './AppTestimonial.vue';

export default {
    name: "PageMain",
    data() {
        return {
            store
        };
    },
    components: {
        AppCard,
        AppTestimonial
    }
}
</script>

<template>
    <section>
        <div class="award">
            <div class="container">
                <div class="mov_company">
                    <h6>HEADACHE FREE</h6>
                    <h2>Award Winning <br> Moving Company</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae odit eos assumenda officia aliquid
                        quo inventore voluptate necessitatibus. Reiciendis quas asperiores veniam, temporibus voluptatem
                        autem in molestias. Temporibus, voluptate iure?</p>
                    <button>READ OUR TESTIMONIALS</button>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="solution">
            <div class="container">
                <h6>WE ARE A PROFESSIONAL</h6>
                <h2>Full-Service Solution</h2>
                <div class="row">
                    <AppCard v-for="solution in store.solutions" :details="solution" :key="solution.id" />
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="quote">
            <div class="square">
                <h5>WE REMOVE HEADACHE FROM MOVING</h5>
                <h3>Move With Ease</h3>
                <p>With our super simple service we can take you from getting a quote, right through to being in your new
                    home with all of your belongings securely packed and safely delivered, even in the rooms of your choice.
                </p>
                <button>GET A FREE QUOTE NOW</button>
            </div>
        </div>
    </section>

    <section>
        <div class="testimonials">
            <div class="container">
                <h5>HAPPY CUSTOMERS</h5>
                <h3>Testimonials</h3>
                <div class="row">
                    <AppTestimonial v-for="testimonial in store.testimonials" :details="testimonial"
                        :key="testimonial.id" />
                </div>
                <button>READ MORE TESTIMONIALS</button>
            </div>
        </div>
    </section>

    <section>
        <div class="request">
            <div class="container">
                <h3>Request A Free Quote</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, assumenda. Corrupti <br> pariatur sequi
                    repudiandae
                    impedit nobis culpa.</p>
                <button>CLICK HERE</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/general.scss';

section {
    text-align: center;
}

h6 {
    color: $grey;
}

h2 {
    color: $secondary;
    font-weight: 900;
    font-size: 30px;
}

.award {
    background-color: $light;

    .mov_company {
        padding: 100px 0;

        h2 {
            padding-top: 10px;
        }

        p {
            padding: 25px 0;
        }

        button {
            padding: 5px 15px;
            font-size: 12px;
        }
    }
}

.solution {
    padding: 100px;

    h2 {
        padding: 10px 0 30px;
    }

    .row {
        gap: 30px;
    }
}

.quote {
    background-image: url('../assets/img/movers/avada-movers-movewithease-background-new.jpg');
    background-size: cover;
    height: 400px;
    position: relative;

    .square {
        background-color: $secondary;
        width: 400px;
        padding: 20px;
        border: 5px solid rgb(64, 175, 0);
        color: $white;
        text-align: center;
        position: absolute;
        right: 10%;
        bottom: 30%;

        h3 {
            font-size: 25px;
            font-weight: 900;
            padding: 15px 0;
            border-bottom: 1px solid $white;
            margin-bottom: 20px;
        }

        button {
            margin-top: 15px;
            padding: 7px 20px;
        }
    }
}

.testimonials {
    height: 550px;
    background-image: url('../assets/img/movers/avada-movers-testimonial-background.jpg');
    background-size: cover;
    padding: 60px 0;

    h5 {
        font-size: x-small;
        color: $grey;
    }

    h3 {
        font-size: xx-large;
        color: $secondary;
        padding: 10px 0 20px;
    }

    .row {
        gap: 20px;
    }

    button {
        padding: 7px 20px;
        margin-top: 50px;
    }
}

.request {
    background-image: url('../assets/img/movers/avada-movers-request-quote-background.jpg');
    height: 350px;

    h3 {
        color: $secondary;
        font-size: xx-large;
        font-weight: 900;
        padding: 80px 0 20px;
    }

    button {
        margin-top: 40px;
        padding: 7px 20px;
    }
}
</style>