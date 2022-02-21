<template>
  <div>
    <Slider texto="Welcome to this basic page to practice Vue.JS" home="true"></Slider>
      <div class="center">
      <Articles></Articles>
      <Sidebar></Sidebar>
      </div>
  </div>
  
    
</template>

<script>

import Articles from '../components/ArticlesComponent.vue';
import Slider from '../components/SliderComponent.vue';
import Sidebar from '../components/SidebarComponent.vue';

export default {
  name: 'Home',
  components: {
    Slider,
    Sidebar,
    Articles
  }
}
</script>
