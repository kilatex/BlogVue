import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ArticlesComponent from './components/ArticlesComponent';
import MiComponente from './components/MiComponente';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes =  [
  { path: '/home', component: ArticlesComponent  },
  { path: '/articles', component: ArticlesComponent  },
  { path: '/mi-comopnente', component: MiComponente  },
  { path: '/', component: ArticlesComponent  }

];


const router  =  new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
