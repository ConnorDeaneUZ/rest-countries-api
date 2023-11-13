<template>
  <section>
    <primary-nav />

    <div class="button-wrapper py-16 px-4 lg:px-32">
      <div
        class="
          button-container
          flex
          items-center
          justify-center
          shadow
          w-[150px]
          h-12
          rounded-md
          relative
        "
      >
        <svg
          class="absolute left-6"
          width="24px"
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
            fill-rule="nonzero"
          />
        </svg>
        <button @click="pushHome()" class="px-2 w-full">Back</button>
      </div>
    </div>

    <div
      v-if="store.countryData[0]"
      class="
        country-info-container
        items-center
        px-4
        lg:px-32
        grid grid-cols-1
        2xl:grid-cols-2
      "
    >
      <div class="flag-wrapper w-[500x] lg:w-[600px]">
        <img
          v-if="store.countryData[0].flags.svg"
          :src="store?.countryData[0].flags?.svg"
          alt=""
        />
      </div>

      <div class="country-info">
        <h2
          v-if="store?.countryData[0].name?.official"
          class="text-4xl font-bold py-8"
        >
          {{ store?.countryData[0].name?.official }}
        </h2>

        <div class="bullet-points-wrapper w-full">
          <ul class="grid grid-cols-1 2xl:grid-cols-2 gap-4">
            <li class="font-bold">
              Native Name:
              <span class="font-normal">{{
                store?.countryData[0]?.name?.nativeName?.eng?.official
                  ? store?.countryData[0]?.name?.nativeName?.eng?.official
                  : store?.countryData[0].name?.official
              }}</span>
            </li>
            <li class="font-bold">
              Population:
              <span class="font-normal">{{
                store.countryData[0].population.toLocaleString()
              }}</span>
            </li>
            <li class="font-bold">
              Region:
              <span class="font-normal">{{ store.countryData[0].region }}</span>
            </li>
            <li class="font-bold">
              Sub Region:
              <span class="font-normal">{{
                store.countryData[0].subregion
              }}</span>
            </li>
            <li class="font-bold">
              Capital:
              <span class="font-normal">{{
                store.countryData[0].capital[0]
              }}</span>
            </li>
            <li class="font-bold">
              Top Level Domain:
              <span class="font-normal">{{ store.countryData[0].tld[0] }}</span>
            </li>
            <li class="font-bold">
              Currencies:
              <span
                v-for="(currency, index) in store.countryData[0].currencies"
                :key="index"
                class="font-normal"
                >{{ currency.name }} ({{ currency.symbol }})</span
              >
            </li>
            <li v-if="store.countryData[0].languages" class="font-bold">
              Languages:
              <span
                v-for="(lang, index) in store.countryData[0].languages"
                :key="index"
                class="font-normal"
              >
                {{ lang }}
              </span>
            </li>
          </ul>
        </div>

        <div class="country-borders-wrapper xl:flex items-center py-16">
          <p class="font-bold mr-4">Border Countries:</p>

          <div
            v-if="store.countryData[0].borders"
            class="countries-container xl:flex"
          >
            <div
              class="countries-wrapper"
              v-for="(border, index) in store.countryData[0].borders"
              :key="index"
            >
              <div
                class="
                  w-[100px]
                  h-8
                  mx-2
                  shadow
                  flex
                  items-center
                  justify-center
                  my-4
                  xl:my-0
                "
              >
                <p>{{ border }}</p>
              </div>
            </div>
          </div>
          <p v-else>No borders data available</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "~/store/useStore.ts";
const store = useStore();
const router = useRouter();

function pushHome() {
  router.push("/");
}

const borders = 4;
</script>

<style>
</style>
