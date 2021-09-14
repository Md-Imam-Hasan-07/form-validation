<script setup lang="ts">
import { ref } from "vue-demi";
import SimpleForm from "../components/SimpleForm.vue";

const schema = ref({
  email: "required|min:3|max:100|email",
  password: "required|min:3|max:100",
});
</script>

<template>
  <SimpleForm :schema="schema" />
</template>
