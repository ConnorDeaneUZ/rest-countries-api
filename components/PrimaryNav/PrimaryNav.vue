<template>
  <section
    class="
      flex
      w-full
      justify-between
      px-4
      lg:px-32
      py-8
      shadow
      items-center
      bg-white
    "
  >
    <h2 class="text-base lg:text-3xl font-bold">Where in the world?</h2>

    <div class="mode-selector flex flex-row items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"
        />
      </svg>
      <p class="text-base capitalize px-2">dark mode</p>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
