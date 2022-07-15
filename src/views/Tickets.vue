<template>
    <section v-if="!isLoading">
        <h2>TICKETS</h2>
        <div class="search_box">
            <div class="search_item">
                <label for="projectName">PROJECT NAME</label>
                <input v-model="filter.projectName" />
            </div>
            <div class="search_item">
                <label for="state">STATE</label>
                <select v-model="filter.severity">
                    <option selected>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </div>
            <div class="search_item">
                <label for="severity">SEVERITY</label>
                <select v-model="filter.state">
                    <option selected>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </div>
        </div>
        <article
            v-for="ticket in tickets"
            :key="ticket.id"
            @click="editTicket(ticket.id)"
        >
            <h3>{{ ticket.title }}</h3>
            <p class="state">{{ ticket.state }}</p>
            <p class="severity" :style="severityStyle(ticket.severity)">
                {{ ticket.severity }}
            </p>
            <p class="content">{{ ticket.content }}</p>
        </article>
    </section>
    <p v-else>Loading...</p>
</template>

<script>
import { defineComponent, reactive, ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getTickets } from '@/assets/api/Tickets';

export default defineComponent({
    setup() {
        const router = useRouter();
        const isLoading = ref(false);

        async function getTicketsFunc() {
            const tks = await getTickets();

            console.log(tks);
        }

        onMounted(() => {
            getTicketsFunc();
        });
        const tickets = ref([
            {
                id: 1,
                title: '1',
                state: 'pending',
                severity: 'easy',
                content: '123123'
            },
            {
                id: 2,
                title: '2',
                state: 'resolved',
                severity: 'hard',
                content:
                    'resolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolved'
            },
            {
                id: 3,
                title: '3',
                state: 'solving',
                severity: 'medium',
                content: '123123'
            },
            {
                id: 4,
                title: '4',
                state: 'solving',
                severity: 'medium',
                content: '123123'
            },
            {
                id: 5,
                title: '5',
                state: 'solving',
                severity: 'medium',
                content: '123123'
            },
            {
                id: 6,
                title: '6',
                state: 'solving',
                severity: 'medium',
                content: '123123'
            }
        ]);

        const filter = reactive({
            projectName: '',
            severity: '',
            state: ''
        });

        watch(filter, () => {
            console.log(filter);
        });

        function severityStyle(severity) {
            const severityList = {
                easy: '#28a745',
                medium: '#ffa500',
                hard: '#fa0f0f'
            };

            const background = severityList[severity];

            return { background };
        }

        function editTicket(id) {
            console.log(id);

            // router.push({ path: `/ticket/${id}` });
        }

        return { tickets, filter, isLoading, severityStyle, editTicket };
    }
});
</script>

<style lang="scss" scoped>
section {
    width: 768px;
    padding: 0.25rem;

    @media screen and (max-width: 768px) {
        width: 95%;
    }

    .search_box {
        @include flex(flex-start, space-between);
        width: 100%;
        margin-bottom: 1rem;

        .search_item {
            flex-basis: 33%;

            input,
            select {
                width: 90%;
            }
        }
    }

    article {
        @include flex(flex-start, flex-start);
        flex-direction: column;
        min-height: 200px;
        border: 1px solid $color-white;
        margin-bottom: 1rem;
        padding: 0 1rem;
        cursor: pointer;

        p {
            margin-bottom: 0.5rem;
        }

        .state,
        .severity {
            @include flex(center, center);
            border: 1px solid $color-white;
            padding: 0.25rem 0.5rem;
            width: 5rem;
        }

        .content {
            width: 100%;
            padding: 1rem 0;
            word-wrap: break-word;
        }

        &:hover {
            background: rgba($color-white, 0.1);
        }
    }
}
</style>
