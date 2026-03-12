<template>
  <div class="welcome container">
    <p>Welcome</p>

    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat"/>
      <p>No Account Yet?  <span @click="showLogin = false">Sign Up</span></p>
    </div>

    <div v-else>
      <h2>Sign UP</h2>
      <SignupForm  @signup="enterChat"/>
        <p>No Account Yet?  <span @click="showLogin = true">Login</span></p>
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  components: {
    SignupForm,
    LoginForm,
  },

  setup() {
    const showLogin = ref(true);
    const router = useRouter()

    const enterChat = () =>{
      router.push({name : 'chatroom'})
    }

    return { showLogin, enterChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

p {
  margin-top: 25px;
  font-size: 14px;
  color: #888; /* Subtle gray so it doesn't distract from the button */
  text-align: center;
}

span {
  color: #5ae4ca; /* Matches your brand color */
  font-weight: 700;
  cursor: pointer;
  margin-left: 5px;
  transition: all 0.2s ease;
  border-bottom: 2px solid transparent; /* Prepared for hover effect */
}

span:hover {
  color: #4ed4bc;
  border-bottom: 2px solid #4ed4bc; /* Subtle underline appears on hover */
}
</style>