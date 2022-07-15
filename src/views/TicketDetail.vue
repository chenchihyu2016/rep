<template>
    <form>
        <fieldset>
            <legend>ADD A TICKET</legend>
            <p>
                <label for="account">Title</label>
                <input
                    v-model="ticketData.title"
                    autofocus
                    required
                    name="account"
                />
            </p>
            <p>
                <label>Severity</label>
                <input v-model="ticketData.severity" required name="severity" />
            </p>
            <p>
                <label>Description</label>
                <textarea
                    v-model="ticketData.content"
                    required
                    name="description"
                />
            </p>
            <button @click="submitHandle">
                <font-awesome-icon
                    :icon="['fas', 'spinner']"
                    v-if="isLoading"
                />
                <span v-else>Submit</span>
            </button>
        </fieldset>
    </form>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup(props) {
        const router = useRouter();
        const isLoading = ref(false);
        const ticketData = reactive({
            title: '',
            severity: '',
            content: ''
        });

        async function submitHandle() {
            event.preventDefault();
            if (isLoading.value) return;

            isLoading.value = true;

            setTimeout(() => {
                router.push({ name: 'Tickets' });
            }, 1000);
        }

        return { isLoading, ticketData, submitHandle };
    }
});
</script>

<style lang="scss" scoped>
form {
    width: 768px;

    @media screen and (max-width: 768px) {
        width: 95%;
    }

    fieldset {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            @include flex(center, space-between);

            width: 100%;
            flex: 1;
            margin-bottom: 2rem;

            label {
                flex: 1;
            }

            input,
            textarea {
                flex: 2;
            }

            textarea {
                min-height: 250px;
            }
        }

        button {
            svg {
                animation: spinning 1000ms linear infinite;
            }

            p {
                @include flex(center, center);
            }
        }
    }
}
</style>
