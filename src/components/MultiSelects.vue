import Multiselect from 'vue-multiselect';
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import VueMultiselect from "vue-multiselect";

const value = ref([]);
const options = ref([
  { name: "Vue.js", code: "vu" },
  { name: "Javascript", code: "js" },
  { name: "Open Source", code: "os" },
]);

const addTag = (newTag: any) => {
  const tag = {
    name: newTag,
    code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
  };
  options.value.push(tag);
  value.value.push(tag);
};
</script>

<template>
  <div>
    <label class="typo__label">Select Skills</label>
    <VueMultiselect
      v-model="value"
      tag-placeholder="Add this as new tag"
      placeholder="Search or add a tag"
      label="name"
      track-by="code"
      :options="options"
      :multiple="true"
      :taggable="true"
      @tag="addTag"
    ></VueMultiselect>
  </div>
</template>
