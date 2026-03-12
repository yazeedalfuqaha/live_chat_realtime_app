<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="displayName" v-model="displayName" />

    <input type="email" placeholder="Email" v-model="email" required />

    <input type="password" required placeholder="password" v-model="password" />

    <button>Sign UP</button>

   
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(displayName.value, email.value, password.value);
    }

    return { displayName, email, password, handleSubmit };
  },
};
</script>

<style>

</style>