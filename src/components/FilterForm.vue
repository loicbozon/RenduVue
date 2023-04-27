<template>
  <div>
    <form>
      <div>
        <label>ABV: </label>
        <input
          type="range"
          max="100"
          min="0"
          v-model="filters.abv_gt"
          @change="updateFilter"
        />
        {{ filters.abv_gt }}
      </div>
      <div>
        <label>IBU:</label>
        <input
          type="range"
          max="1157"
          min="0"
          v-model="filters.ibu_gt"
          @change="updateFilter"
        />{{ filters.ibu_gt }}
      </div>
      <div>
        <label>EBC:</label>
        <input
          type="range"
          max="600"
          min="0"
          v-model="filters.ebc_gt"
          @change="updateFilter"
        />
        {{ filters.ebc_gt }}
      </div>
      <div>
        <label>Food pairing:</label>
        <input
          type="text"
          v-model="filters.food_pairing"
          @keydown="updateFilter"
        />
      </div>
    </form>

    <ul>
      <li v-for="beer in beers" :key="beer.id">
        {{ beer.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      beers: [],
      filters: {
        abv_gt: 0,
        ibu_gt: 0,
        ebc_gt: 0,
        food_pairing: "",
      },
    };
  },
  created() {
    this.getBeers();
  },

  methods: {
    async getBeers(filter = "") {
      const url = `https://api.punkapi.com/v2/beers?per_page=80${
        filter ? filter : ""
      }`;
      console.log(url);
      const response = await axios.get(url);
      this.beers = response.data;
    },
    updateFilter() {
      const filter = `&abv_gt=${this.filters.abv_gt}&ibu_gt=${
        this.filters.ibu_gt
      }&ebc_gt=${this.filters.ebc_gt}${
        !!this.filters.food_pairing ? "&food=" + this.filters.food_pairing : ""
      }`;
      console.log(filter);

      this.getBeers(filter);
    },
  },
};
</script>
