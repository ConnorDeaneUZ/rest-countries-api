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
        <img src="https://flagcdn.com/tc.svg" alt="" />
      </div>

      <div class="country-info">
        <h2 class="text-4xl font-bold py-8">Belgium</h2>

        <div class="bullet-points-wrapper w-full">
          <ul class="grid grid-cols-1 2xl:grid-cols-2 gap-4">
            <li class="font-bold">
              Native Name: <span class="font-normal">Belgie</span>
            </li>
            <li class="font-bold">
              Population: <span class="font-normal">11319511</span>
            </li>
            <li class="font-bold">
              Region: <span class="font-normal">Belgie</span>
            </li>
            <li class="font-bold">
              Sub Region: <span class="font-normal">Belgie</span>
            </li>
            <li class="font-bold">
              Capital: <span class="font-normal">Belgie</span>
            </li>
            <li class="font-bold">
              Top Level Domain: <span class="font-normal">Belgie</span>
            </li>
            <li class="font-bold">
              Currencies: <span class="font-normal">Belgie</span>
            </li>
            <li class="font-bold">
              Languages: <span class="font-normal">Belgie</span>
            </li>
          </ul>
        </div>

        <div class="country-borders-wrapper xl:flex items-center py-16">
          <p class="font-bold mr-4">Border Countries:</p>

          <div class="countries-container xl:flex">
            <div
              class="countries-wrapper"
              v-for="(border, index) in borders"
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
                <p>France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 

  flag

  country information.
 -->
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function pushHome() {
  router.push("/");
}

const borders = 4;
</script>

<style>
</style>
