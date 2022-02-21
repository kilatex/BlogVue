<template>
    <section>
          <Slider texto="Messi"></Slider>
        <div class="center">
            <section id="content">
            <h2 class="title-about">About</h2>

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
    components: {
    Slider,
    Sidebar,
  }
}
</script>