<script>
import { store } from '../store';
import AppCard from './AppCard.vue';

export default {
    name: "PageMain",
    data() {
        return {
            store
        };
    },
    components: {
        AppCard
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
</style>