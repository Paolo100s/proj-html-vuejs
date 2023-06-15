<script>
import { store } from '../store';

export default {
    name: 'AppTestimonial',
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
        <div class="image_container">
            <img :src="details.image" alt="img">
        </div>
        <h3>{{ details.name }}</h3>
        <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, est itaque ratione unde dicta
            recusandae."
        </p>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/general.scss';

.image_container {
    margin: auto;
    width: 120px;

    img {
        max-width: 100%;
        border-radius: 50%;
    }
}

h3 {
    color: $primary;
    padding: 30px 0;
}
</style>