import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import type { Country } from "~/types/Country";

export function useCountries() {
  const countries: Ref<Country[]> = ref([]);
  const isLoading: Ref<boolean> = ref(false);
  const error: Ref<string | null> = ref(null);

  const fetchData = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) throw new Error("Error fetching data");
      const data: Country[] = await response.json();
      countries.value = data;
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = "An unknown error occurred";
      }
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetchData);

  return { countries, isLoading, error };
}
