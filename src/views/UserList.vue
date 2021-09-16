<script setup lang="ts">
import { inject } from "vue-demi";

let store = inject("store");
</script>

<template>
  <!-- <div v-for="user in store.state.users">{{ user.name }}</div> -->

  <div class="table w-full p-2">
    <table class="w-full border">
      <thead>
        <tr class="bg-gray-50 border-b">
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">Name</div>
          </th>
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">Country</div>
          </th>
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">Language</div>
          </th>
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">Bordres</div>
          </th>
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">Capital</div>
          </th>
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">Currency</div>
          </th>
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">Action</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-gray-100 text-center border-b text-sm text-gray-600"
          v-for="user in store.state.users"
        >
          <td class="p-2 border-r">{{ user.name }}</td>
          <td class="p-2 border-r">{{ user.country[0].name }}</td>
          <td class="p-2 border-r">{{ user.country[0].languages[0].name }}</td>
          <td class="p-2 border-r">{{ user.country[0].borders }}</td>
          <td class="p-2 border-r">{{ user.country[0].capital }}</td>
          <td class="p-2 border-r">{{ user.country[0].currencies[0].name }}</td>
          <td>
            <a
              href="#"
              class="
                bg-blue-500
                p-2
                text-white
                hover:shadow-lg
                text-xs
                font-thin
              "
              >Edit</a
            >
            <a
              href="#"
              class="
                bg-red-500
                p-2
                text-white
                hover:shadow-lg
                text-xs
                font-thin
              "
              >Remove</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
