<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import VueMultiselect from "./MultiSelects.vue";

const route = useRoute();

const routePath = computed(() => {
  return route.path === "/register" ? "register" : "login";
});

const props = defineProps({
  countrys: {
    type: Array,
  },
  schema: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["submit"]);

const submit = (values: any, { resetForm }) => {
  emit("submit", values);

  resetForm();
};
</script>

<template>
  <div class="mx-20 p-20 w-1/2 bg-white rounded-2xl">
    <div class="items-center justify-center font-bold flex">
      <h2 class="text-2xl" v-if="routePath === 'register'">
        Create an Account
      </h2>
      <h2 class="text-2xl" v-else>Login</h2>
    </div>

    <vee-form :validation-schema="schema" @submit="submit">
      <!-- Name -->
      <div class="m-6" v-if="routePath === 'register'">
        <label class="inline-block mb-2">Name</label>
        <vee-field
          name="name"
          type="text"
          class="general-input-style"
          placeholder="Enter Name"
        />
        <ErrorMessage class="text-red-600" name="name" />
      </div>
      <!-- Email -->
      <div class="m-6">
        <label class="inline-block mb-2">Email</label>
        <vee-field
          name="email"
          type="email"
          class="general-input-style"
          placeholder="Enter Email"
        />
        <ErrorMessage class="text-red-600" name="email" />
      </div>
      <!-- Password -->
      <div class="m-6">
        <label class="inline-block mb-2">Password</label>
        <vee-field name="password" :bails="false" v-slot="{ field, errors }">
          <input
            type="password"
            class="general-input-style focus:border-black"
            placeholder="Password"
            v-bind="field"
          />
          <div
            class="text-red-600"
            v-for="(error, index) in errors"
            :key="index"
          >
            {{ error }}
          </div>
        </vee-field>
      </div>
      <div v-if="routePath === 'register'">
        <!-- Confirm Password -->
        <div class="m-6">
          <label class="inline-block mb-2">Confirm Password</label>
          <vee-field
            name="confirm_password"
            type="password"
            class="general-input-style"
            placeholder="Confirm Password"
          />
          <ErrorMessage class="text-red-600" name="confirm_password" />
        </div>
        <!-- Age -->
        <div class="m-6">
          <label class="inline-block mb-2">Age</label>
          <vee-field name="age" type="number" class="general-input-style" />
          <ErrorMessage class="text-red-600" name="age" />
        </div>
        <!-- Mobile Number -->
        <div class="m-6">
          <label class="inline-block mb-2">Mobile Number</label>
          <vee-field name="mobile" type="tel" class="general-input-style" />
          <ErrorMessage class="text-red-600" name="mobile" />
        </div>
        <!-- Description -->
        <div class="m-6">
          <label class="inline-block mb-2">Tell something about yourself</label>
          <vee-field
            name="description"
            type="textarea"
            class="general-input-style"
          />
          <ErrorMessage class="text-red-600" name="description" />
        </div>
        <!-- Date -->
        <div class="m-6">
          <label class="inline-block mb-2">Pick a Date</label>
          <vee-field name="date" type="date" class="general-input-style" />
          <ErrorMessage class="text-red-600" name="date" />
        </div>
        <!-- file upload -->
        <div class="m-6">
          <label class="inline-block mb-2">Upload a File</label>
          <vee-field
            name="file"
            type="file"
            class="general-input-style"
            placeholder="Confirm Password"
          />
          <ErrorMessage class="text-red-600" name="file" />
        </div>
        <!-- Country -->
        <div class="m-6">
          <label class="inline-block mb-2">Country</label>
          <vee-field as="select" name="country" class="general-input-style">
            <option v-for="country in countrys" :value="country.name">
              {{ country.name }}
            </option>
          </vee-field>
          <ErrorMessage class="text-red-600" name="country" />
        </div>
        <!-- Multiselect -->
        <div class="m-6">
          <VueMultiselect />
        </div>
        <!-- TOS -->
        <div class="m-6 pl-6">
          <vee-field
            name="tos"
            value="1"
            type="checkbox"
            class="w-4 h-4 float-left -ml-6 mt-1 rounded"
          />
          <label class="inline-block">Accept terms of service</label>
          <ErrorMessage class="text-red-600 block" name="tos" />
        </div>
      </div>
      <button
        type="submit"
        class="
          block
          w-full
          bg-purple-600
          text-white
          py-1.5
          px-3
          rounded
          transition
          hover:bg-purple-700
        "
      >
        Submit
      </button>
    </vee-form>
  </div>
</template>

<style scoped>
.general-input-style {
  @apply block
          w-full
          py-1.5
          px-3
          text-gray-800
          border border-gray-300
          transition
          duration-500
          focus:outline-none focus:border-black
          rounded;
}
</style>
