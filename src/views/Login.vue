<script setup lang="ts">
import { inject, ref } from "vue-demi";
import { useRouter } from "vue-router";
import SimpleForm from "../components/SimpleForm.vue";

const schema = ref({
  email: "required|min:3|max:100|email",
  password: "required|min:3|max:100",
});

const router = useRouter();

let store = inject("store");

const submit = (values: any) => {
  const err = store.methods.checkCredential(values);
  if (err) {
    alert(err);
  } else {
    router.push({ name: "SecurePage" });
  }
};
</script>

<template>
  <SimpleForm :schema="schema" @submit="submit" />
</template>
