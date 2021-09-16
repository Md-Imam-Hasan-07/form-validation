<script setup lang="ts">
import { inject, onMounted, ref } from "vue-demi";
import SimpleForm from "../components/SimpleForm.vue";
import CountryData from "../services/DataService/HandleRequest";

const countrys = ref([]);
const schema = ref({
  name: "required|min:3|max:100|alpha_spaces",
  email: "required|min:3|max:100|email",
  age: "required|min_value:18|max_value:100",
  mobile: "required|min:11",
  description: "required|min:5",
  date: "required",
  file: "required|mimes:image/*|size:1000",
  password: "required|min:3|max:100",
  confirm_password: "password_mismatch:@password",
  country: "required|country_excluded:Antarctica",
  tos: "tos",
});

let store = inject("store");

onMounted(async () => {
  let res = await CountryData.getCountryList();

  countrys.value = res.data;
});

const submit = async (values: any) => {
  const res = await CountryData.getCountryInfo(values.country);
  values.country = res.data;
  store.methods.addUser(values);
};
</script>

<template>
  <SimpleForm :countrys="countrys" :schema="schema" @submit="submit" />
</template>
