<script>
import { store } from './store';
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';

export default {
    components: {
        store,
        PageHeader,
        PageMain
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

    <main>
        <PageMain />
    </main>
</template>

<style lang="scss">
@use './styles/partials/variables.scss' as *;
@use './styles/general.scss';
</style>
