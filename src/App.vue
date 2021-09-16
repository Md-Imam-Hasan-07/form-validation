<script setup lang="ts">
import { provide } from "vue";
import AppHeader from "./components/Header.vue";
import store from "./store/index";

provide("store", store);
</script>

<template>
  <app-header />
  <div class="items-center justify-center flex flex-col p-10">
    <router-view />
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
