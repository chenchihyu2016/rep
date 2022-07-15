<template>
    <Header />
    <main>
        <slot></slot>
    </main>
</template>

<script>
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';

export default defineComponent({
    components: { Header },
    setup() {
        return {};
    }
});
</script>

<style lang="scss" scoped>
main {
    @include flex(center, center);
    flex-direction: column;
    position: relative;
    margin-top: 10vh;
    width: 100%;
}
</style>
