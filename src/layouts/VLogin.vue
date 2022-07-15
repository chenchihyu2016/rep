<template>
    <section>
        <h2>Ticket System</h2>
        <main>
            <slot></slot>
        </main>
    </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {};
    }
});
</script>

<style lang="scss" scoped>
section {
    @include flex(center, center);
    flex-direction: column;
    height: 100vh;
}
</style>
