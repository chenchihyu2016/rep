<template>
    <header>
        <router-link to="/tickets">TICKET SYSTEM</router-link>
        <div>
            <button
                class="add_ticket"
                @click="navigateToDetail"
                v-if="routeName !== 'TicketDetail'"
            >
                Add a Ticket
            </button>
            <button @click="logoutHandle">Logout</button>
        </div>
    </header>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        const route = useRoute();
        const routeName = computed(() => route.name);

        function logoutHandle() {
            router.push({ name: 'Login' });
        }

        function navigateToDetail() {
            router.push({ name: 'TicketDetail' });
        }

        return { routeName, navigateToDetail, logoutHandle };
    }
});
</script>

<style lang="scss" scoped>
header {
    @include flex(center, space-between);
    position: fixed;
    top: 0;
    height: 7vh;
    width: calc(100% - 2rem);
    padding: 0 1rem;
    border-bottom: 1px solid $color-primary;
    background: $color-background;
    z-index: 1;

    button {
        &:not(:last-child) {
            margin-right: 0.5rem;
        }
    }
}
</style>
