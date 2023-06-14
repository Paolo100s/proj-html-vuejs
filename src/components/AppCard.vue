<script>
import { store } from '../store';

export default {
    name: 'AppCard',
    props: {
        details: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="card">
        <img :src="details.image" :alt="img">
        <div class="info">
            <h3>{{ details.title }}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum non repellendus repudiandae corporis, dolore
                quaerat eligendi reprehenderit.</p>
            <button>READ MORE</button>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/general.scss';

.card {
    border: 10px solid $light;

    .info {
        border-top: 10px solid $light;
        padding: 10px;

        h3 {
            color: $primary;
            padding: 10px;
        }

        button {
            padding: 7px 20px;
            margin: 20px 0;
            font-size: 12px;
        }
    }

}
</style>