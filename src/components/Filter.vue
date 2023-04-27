<script>
import axios from "axios";

export default {
  name: "Filter",
  data() {
    return {
      beers: [],
      filters: {
        abv: 0,
        ibu: 0,
        ebc: 0,
      },
    };
  },
  async created() {
    const response = await axios.get(
      "https://api.punkapi.com/v2/beers?per_page=80"
    );
    this.beers = response.data;
  },
  computed: {
    filteredBeers() {
      return this.beers.filter((beer) => {
        return (
          beer.abv >= this.filters.abv &&
          beer.ibu >= this.filters.ibu &&
          beer.ebc >= this.filters.ebc
        );
      });
    },
  },
  mounted() {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => {
        this.beers = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="beer in beers" :key="beer.id">
        {{ beer.name }}<!--  - {{ beer.food_pairing }} - {{ beer.first_brewed }} -
        {{ beer.ingredients.yeast }} -->
      </li>
    </ul>
  </div>
</template>



