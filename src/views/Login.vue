<script setup lang="ts">
import { inject, ref } from "vue-demi";
import SimpleForm from "../components/SimpleForm.vue";

const schema = ref({
  email: "required|min:3|max:100|email",
  password: "required|min:3|max:100",
});

let store = inject("store");

const submit = (values: any) => {
  try {
    store.methods.checkCredential(values);
  } catch (err) {
    alert(err);
  }
};
</script>

<template>
  <SimpleForm :schema="schema" @submit="submit" />
</template>
