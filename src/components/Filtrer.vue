<script>
  import axios from "axios";
  //import brewdog from '@/brewdog'; 

  export default {
    name: 'Filter',
    data() {
      return {
        beers: []
      }
    },
    mounted() {
      axios.get('https://api.punkapi.com/v2/beers')
        .then(response => {
          this.beers = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
</script>

<template>
  <ul>
    <li v-for="beer in beers" :key="beer.id">{{ beer.name }}</li>
  </ul>

</template>



