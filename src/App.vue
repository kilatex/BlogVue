<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <div class="center">
    </div>
    <ArticlesComponent></ArticlesComponent>    

  </div>
</template>


<script>

import ArticlesComponent from './components/ArticlesComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import Sidebar from './components/SidebarComponent.vue';


export default {
  name: 'app',
  components:{
    ArticlesComponent,
    HeaderComponent,
    Sidebar
  }
  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


@import './assets/css/styles.css';
</style>
