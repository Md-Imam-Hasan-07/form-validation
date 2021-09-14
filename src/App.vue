<script setup lang="ts">
import AppHeader from "./components/Header.vue";
</script>

<template>
  <div class="items-center justify-center flex flex-col p-10">
    <app-header />
    <router-view />
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
