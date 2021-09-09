<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import CountryData from "../services/DataService/HandleRequest";

const countrys = ref([]);

onMounted(async () => {
  let res = await CountryData.getCountryList();

  countrys.value = res.data.list;
});

const schema = ref({
  name: "required|min:3|max:100|alpha_spaces",
  email: "required|min:3|max:100|email",
  age: "required|min_value:18|max_value:100",
  mobile: "required|min:11",
  date: "required",
  time: "required",
  month: "required",
  week: "required",
  file: "required|mimes:image/*|size:1000",
  password: "required|min:3|max:100",
  confirm_password: "password_mismatch:@password",
  country: "required|country_excluded:Antartica",
  tos: "tos",
});

const userData = ref({
  country: "USA",
});
const submit = (values: any) => {
  console.log(countrys.value);
  console.log(values);
};
</script>

<template>
  <div class="mx-20 px-20">
    <vee-form
      :validation-schema="schema"
      @submit="submit"
      :initial-values="userData"
      class="flex flex-wrap"
    >
      <!-- Name -->
      <div class="m-6">
        <label class="inline-block mb-2">Name</label>
        <vee-field
          name="name"
          type="text"
          class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
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
          class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
          placeholder="Enter Email"
        />
        <ErrorMessage class="text-red-600" name="email" />
      </div>
      <!-- Age -->
      <div class="m-6">
        <label class="inline-block mb-2">Age</label>
        <vee-field
          name="age"
          type="number"
          class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
        />
        <ErrorMessage class="text-red-600" name="age" />
      </div>
      <!-- Mobile Number -->
      <div class="m-6">
        <label class="inline-block mb-2">Mobile Number</label>
        <vee-field
          name="mobile"
          type="tel"
          class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
        />
        <ErrorMessage class="text-red-600" name="mobile" />
      </div>
      <!-- Date -->
      <div class="m-6">
        <label class="inline-block mb-2">Pick a Date</label>
        <vee-field
          name="date"
          type="date"
          class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
        />
        <ErrorMessage class="text-red-600" name="date" />
      </div>
      <!-- Password -->
      <div class="m-6">
        <label class="inline-block mb-2">Password</label>
        <vee-field name="password" :bails="false" v-slot="{ field, errors }">
          <input
            type="password"
            class="
              block
              w-full
              py-1.5
              px-3
              text-gray-800
              border border-gray-300
              transition
              duration-500
              focus:outline-none focus:border-black
              rounded
            "
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
      <!-- Confirm Password -->
      <div class="m-6">
        <label class="inline-block mb-2">Confirm Password</label>
        <vee-field
          name="confirm_password"
          type="password"
          class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
          placeholder="Confirm Password"
        />
        <ErrorMessage class="text-red-600" name="confirm_password" />
      </div>
      <!-- file upload -->
      <div class="m-6">
        <label class="inline-block mb-2">Upload a File</label>
        <vee-field
          name="file"
          type="file"
          class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
          placeholder="Confirm Password"
        />
        <ErrorMessage class="text-red-600" name="file" />
      </div>
      <!-- time -->
      <div class="m-6">
        <label class="inline-block mb-2">Pick a time</label>
        <vee-field
          name="time"
          type="time"
          class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
          placeholder="Confirm Password"
        />
        <ErrorMessage class="text-red-600" name="time" />
      </div>
      <!-- month -->
      <div class="m-6">
        <label class="inline-block mb-2">Pick a month</label>
        <vee-field
          name="month"
          type="month"
          class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
          placeholder="Confirm Password"
        />
        <ErrorMessage class="text-red-600" name="month" />
      </div>
      <!-- week -->
      <div class="m-6">
        <label class="inline-block mb-2">Pick a week</label>
        <vee-field
          name="week"
          type="week"
          class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
          placeholder="Confirm Password"
        />
        <ErrorMessage class="text-red-600" name="week" />
      </div>
      <!-- Country -->
      <div class="m-6">
        <label class="inline-block mb-2">Country</label>
        <vee-field
          as="select"
          name="country"
          class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
        >
          <option v-for="country in countrys" :value="country">
            {{ country }}
          </option>
        </vee-field>
        <ErrorMessage class="text-red-600" name="country" />
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
