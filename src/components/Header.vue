<script setup lang="ts">
import { inject } from "vue-demi";

const store = inject("store");

const logout = () => {
  store.methods.logout();
  window.location.reload();
};
</script>
<template>
  <div class="p-8 bg-gray-800 text-white">
    <ul class="flex">
      <li class="mr-10">
        <router-link to="/">Secure Page</router-link>
      </li>
      <div class="flex" v-if="!store.state.isLoggedIn">
        <li class="mr-10">
          <router-link to="/register">Register</router-link>
        </li>
        <li class="mr-10">
          <router-link to="/login">Login</router-link>
        </li>
      </div>
      <div class="flex" v-else>
        <li class="mr-10">
          <p>{{ store.state.loggedInUser.name }}</p>
        </li>
        <li class="mr-10">
          <a href="#" @click.prevent="logout">Logout</a>
        </li>
      </div>
    </ul>
  </div>
</template>
