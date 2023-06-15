<script>
import { store } from './store';
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';

export default {
    components: {
        store,
        PageHeader,
        PageMain,
        PageFooter
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

    <footer>
        <PageFooter />
    </footer>
</template>

<style lang="scss">
@use './styles/partials/variables.scss' as *;
@use './styles/general.scss';
</style>
