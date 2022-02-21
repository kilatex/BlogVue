<template>
        <div id="slider" :class="{
            'slider-big bg-green' : home,
            'slider-small bg-green' : !home 
        }">
            <h1 class="text-slider">{{texto}}</h1>
            <router-link v-if="home" to="/about" class="btn btn-white">Go To About</router-link>
        </div>
</template>


<style>
.text-slider{
    font-size: 36px;
}
</style>

<script>

export default {
    name : 'SliderComponent',
    props: ['texto','home']
}
</script>