<template>
  <article class="article-item" >
    <div class="image-wrap">
      <img :src="movie.image" :alt="movie.name" />
    </div>
    <h2>{{ movie.name }}</h2>
    <span
      class="date"
      :class="{
        green: movie.year > 2016,
        red: movie.year < 2016,
      }"
    >
      {{ movie.year }}
    </span>
        <input type="button" value="Favorite" @click="favoriteMovie(movie)">

    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "Movie",
  props: ["movie"],
  methods: {
      favoriteMovie(movie){
          this.$emit('favorite',movie);
      }
  }
};
</script>