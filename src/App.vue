<template>
    <transition name="fade" mode="out-in">
        <div class="component" :key="layout">
            <component :is="layout">
                <router-view v-slot="{ Component }">
                    <transition name="component" mode="out-in">
                        <component :is="Component" :key="routeName" />
                    </transition>
                </router-view>
            </component>
        </div>
    </transition>
</template>

<script>
import { defineComponent, ref, computed, watch } from 'vue';
import VIndex from './layouts/VIndex.vue';
import VLogin from './layouts/VLogin.vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    components: { VIndex, VLogin },
    setup() {
        const layout = ref('VLogin');
        const route = useRoute();
        const routeName = computed(() => route.name);

        watch(route, () => {
            layout.value = route.meta.layout;
        });

        return { layout, routeName };
    }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
@import './assets/scss/global/variables';
@import './assets/scss/vendors/normalize';
@import './assets/scss/global/transition';

.component {
    font-family: 'Lato', 'Noto Sans TC', '微軟正黑體', Helvetica, Arial,
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
