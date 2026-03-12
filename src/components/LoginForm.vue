<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="Email" v-model="email" required />
    <input type="password" required placeholder="password" v-model="password" />
    <button>Login</button>

    
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(displayName.value, email.value, password.value);
    };

    return { email, password, handleSubmit };
  },
};
</script>

<style>

</style>