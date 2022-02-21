<template>
    <section>
          <Slider texto="Messi"></Slider>
        <div class="center">
            <section id="content">
            <h2 class="title-about">About</h2>

                <div class="info" v-if="agroupInfoUser" v-html="agroupInfoUser"></div>

                <p>INFO BY COMPUTED METHOD</p>
            </section>

            <Sidebar></Sidebar>

        </div>

    </section>
    
    
</template>



<style>
.title-about{
    text-align: start;
}



</style>
<script>
import Slider from '../components/SliderComponent.vue';
import Sidebar from '../components/SidebarComponent.vue';
export default {
    name: 'About',
    computed:{

        agroupInfoUser(){
            const info = "Name: "+this.name+
                        '<br/>'+
                        'Last Name: '+this.surname+
                        '<br>'+
                        'Age: '+this.year+'<hr>'; 

            return info;
        }
    },
    components: {
    Slider,
    Sidebar,
  },
  data(){
      return {
          name: 'Santiago',
          surname: 'Maldonado',
          year: '21 Years Old'
      }
  }
}
</script>