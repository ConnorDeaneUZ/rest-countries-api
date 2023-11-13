import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    countryData: null,
    error: null,
  }),
  actions: {
    async fetchCountrySingle(country: string) {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${country}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        this.countryData = await response.json();

        console.log("country data", this.countryData);
      } catch (err) {
        this.error = err?.message;
      }
    },
  },
});
