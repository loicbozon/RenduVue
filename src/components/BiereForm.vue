<template>
  <div>
    <form class="formContainer">
      <div class="parent">
        <div class="div1">
          <div>
            <label>ABV: </label>
            <input
              type="range"
              max="60"
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
            />
            {{ filters.ibu_gt }}
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
        </div>
        <div class="div2">
          <div>
            <label>Name:</label>
            <input type="text" v-model="filters.name" @keydown="updateFilter" />
          </div>
          <div>
            <label>Nourriture:</label>
            <input
              type="text"
              v-model="filters.food_pairing"
              @keydown="updateFilter"
            />
          </div>
          <div>
            <label>Levure:</label>
            <input
              type="text"
              v-model="filters.food_pairing"
              @keydown="updateFilter"
            />
          </div>
        </div>
      </div>
    </form>

    <ul>
      <li class="beerName" v-for="beer in beers" :key="beer.id">
        <div class="parent">
          <div class="div1">
            <h2>{{ beer.name }}</h2>
            <img :src="beerImageURL" alt="Beer Image" />
          </div>
          <div class="div2">
            <div>volume : {{ beer.volume.value }} {{ beer.volume.unit }}</div>
            <div>
              taux d'alcool : {{ beer.method.fermentation.temp.value }}
              {{ beer.method.fermentation.temp.unit }}
            </div>
            <div>Conseil de brasseurs : {{ beer.brewers_tips }}</div>
            <div>Description : {{ beer.description }}</div>
            <div>Brassée la premiere fois le {{ beer.first_brewed }}</div>
            <div>Accompagne bien les plats : {{ beer.food_pairing }}</div>
            <div>Levure : {{ beer.ingredients.yeast }}</div>
          </div>
        </div>
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
      beerImageURL: "",
      filters: {
        abv_gt: 0,
        ibu_gt: 0,
        ebc_gt: 0,
        food_pairing: "",
        name: "",
      },
    };
  },
  created() {
    this.getBeers();
  },
  mounted() {
    this.fetchBeer();
  },
  methods: {
    async getBeers(filter = "") {
      const url = `https://api.punkapi.com/v2/beers?per_page=80${
        filter ? filter : ""
      }`;
      const response = await axios.get(url);
      this.beers = response.data;
    },
    updateFilter() {
      const filter = `&abv_gt=${this.filters.abv_gt}&ibu_gt=${
        this.filters.ibu_gt
      }&ebc_gt=${this.filters.ebc_gt}${
        !!this.filters.food_pairing ? "&food=" + this.filters.food_pairing : ""
      }${!!this.filters.name ? "&beer_name=" + this.filters.name : ""}`;

      this.getBeers(filter);
    },
    async fetchBeer() {
      const response = await fetch("https://api.punkapi.com/v2/beers");
      const data = await response.json();
      this.beer = data[0];
      this.beerImageURL = this.beer.image_url;
    },
  },
};
</script>
