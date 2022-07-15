<template>
    <form>
        <fieldset>
            <legend>Login</legend>
            <p>
                <label for="account">Account</label>
                <input
                    v-model="userInfo.account"
                    autofocus
                    autocomplete="on"
                    required
                    name="account"
                />
            </p>
            <p>
                <label>Password</label>
                <input v-model="userInfo.mima" required name="mima" />
            </p>
            <button @click="loginHandle">
                <font-awesome-icon
                    :icon="['fas', 'spinner']"
                    v-if="isLoading"
                />
                <p v-else>登入</p>
            </button>
        </fieldset>
    </form>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/assets/api/Login';
import { getParams } from '@/assets/api/Common';

export default defineComponent({
    setup() {
        const userInfo = reactive({ account: 'qa@gmail.com', mima: 'qa1234' });
        const router = useRouter();
        const isLoading = ref(false);

        async function loginHandle() {
            event.preventDefault();

            isLoading.value = true;

            try {
                const { token, name, roleName } = await login(userInfo);

                localStorage.setItem('token', token);
                localStorage.setItem('name', name);
                localStorage.setItem('roleName', roleName);

                router.push({ name: 'Tickets' });
            } catch (error) {
                console.log(error);
            }
        }

        return { userInfo, isLoading, loginHandle };
    }
});
</script>

<style lang="scss" scoped>
form {
    fieldset {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 320px;
        height: 50vh;

        p {
            @include flex(center, space-between);
            width: 100%;
            flex: 1;

            label {
                flex: 1;
            }

            input {
                flex: 2;
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
