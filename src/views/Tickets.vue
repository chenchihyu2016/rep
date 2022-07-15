<template>
    <section v-if="!isLoading">
        <h2>TICKETS</h2>
        <div class="search_box">
            <label for="projectName">PROJECT NAME</label>
            <label for="state">STATE</label>
            <label for="severity">SEVERITY</label>
            <input v-model="filter.projectName" />
            <select v-model="filter.severity">
                <option selected>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <select v-model="filter.state">
                <option selected>A</option>
                <option>B</option>
                <option>C</option>
            </select>
        </div>
        <article v-for="ticket in tickets" :key="ticket.id">
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
import { defineComponent, reactive, ref, watch } from 'vue';

export default defineComponent({
    setup() {
        const isLoading = ref(false);
        const tickets = ref([
            {
                title: '1',
                state: 'pending',
                severity: 'easy',
                content: '123123'
            },
            {
                title: '2',
                state: 'resolved',
                severity: 'hard',
                content:
                    'resolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolvedresolved'
            },
            {
                title: '3',
                state: 'solving',
                severity: 'medium',
                content: '123123'
            },
            {
                title: '4',
                state: 'solving',
                severity: 'medium',
                content: '123123'
            },
            {
                title: '5',
                state: 'solving',
                severity: 'medium',
                content: '123123'
            },
            {
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

        return { tickets, filter, isLoading, severityStyle };
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
        @include flex(flex-start, space-around);
        width: 100%;
        margin-bottom: 1rem;

        label,
        input,
        select {
            flex-basis: 32%;
            margin-bottom: 0.25rem;

            @media screen and (max-width: 768px) {
                flex-basis: 30%;
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
    }
}
</style>
