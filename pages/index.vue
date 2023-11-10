<template>
  <section class="flex flex-col items-center">
    <primary-nav />

    <div class="app-container max-w-[2000px] px-4">
      <search />
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xlg:grid-cols-4
          gap-8
          md:gap-16
          xlg:gap-32
        "
      >
        <country-card
          v-for="(card, index) in countries"
          :key="index"
          :name="card.name.official"
          :population="card?.population"
          :region="card.region"
          :capital="card.capital"
          :flag="card.flags.svg"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import data from "~/config/data.json";
import { useCountries } from "~/composables/useCountries";

const { countries, isLoading, error } = useCountries();

console.log("card data", countries);
</script>