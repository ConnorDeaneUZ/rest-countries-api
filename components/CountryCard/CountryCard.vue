<template>
  <NuxtLink
    :to="`/region/${region}/country/${countryName.replace(/\\s+/g, '_')}`"
    @click="fetchCountry()"
  >
    <section class="min-w-[250px]">
      <div class="container shadow rounded-md overflow-hidden">
        <div
          class="image-container"
          :style="`background-image: url(${flag}); width: 100%; height: 300px; background-position: center`"
        ></div>

        <div class="info-container p-8 bg-white">
          <h2 v-if="countryName" class="text-xl font-bold py-4">
            {{ countryName }}
          </h2>
          <p class="text-sm py-1">
            Population:
            <span class="text-sm text-gray-500">{{
              population.toLocaleString()
            }}</span>
          </p>
          <p class="text-sm py-1">
            Region: <span class="text-sm text-gray-500">{{ region }}</span>
          </p>
          <p class="text-sm py-1">
            Capital:
            <span class="text-sm text-gray-500">{{
              capital ? capital[0] : capital
            }}</span>
          </p>
        </div>
      </div>
    </section>
  </NuxtLink>
</template>

<script setup>
import { useStore } from "~/store/useStore.ts";
import { defineProps } from "vue";

const props = defineProps({
  countryName: {
    type: String,
  },
  population: {
    type: Number,
  },
  region: {
    type: String,
  },
  capital: {
    type: Array,
  },
  flag: {
    type: String,
  },
});

const store = useStore();
const { fetchCountrySingle } = store;

function fetchCountry() {
  fetchCountrySingle(props.countryName);
}
</script>