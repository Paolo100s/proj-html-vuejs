<script>
import { store } from './store';
import PageHeader from './components/PageHeader.vue';


export default {
    components: {
        store,
        PageHeader,
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <PageHeader />
    </header>
</template>

<style lang="scss">
@use './styles/partials/variables.scss' as *;
@use './styles/general.scss';
</style>
