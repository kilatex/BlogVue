<template>
    <section>
        
        <div class="center">

            <h3> {{id_from_url}} </h3>

            <div class="directivas ">
                <h1>Directivas Utilizadas</h1>

                <input type="text" class="input-model" v-model="text">


                <div class="condicional">
                    <p class="alert-mala" v-if="!text">No hay Texto en el INPUT</p> 
                   <p class="alert-buena" v-if="text">Si hay Texto, el texto es:  {{text}} </p>
                </div>

                <div class="movies">
                    <h3>Movies List</h3>
                    <ul>
                        <li class="list-movies" v-for= "movie in movies" :key="movie" >{{movie}}</li>
                    </ul>
                </div>
            </div>


        </div>

    </section>
    
    
</template>



<style>
.title-about{
    text-align: start;
}
.alert-mala{
    color: red;
    font-weight: bold;
    font-size: 18px;
}
.alert-buena{
    color: green;
    font-weight: bold;
}
.directivas{
    margin-bottom: 40px;
}
.list-movies{
    list-style: none;
    font-weight: bold;
    
}

.input-model{
    width: 250px !important;
}

</style>
<script>

export default {
    name: 'Page',
    mounted(){
        this.id_from_url = this.$route.params.id;
    },
    data(){
        return{
        id_from_url  : null,
        text: '',
        movies: ['Batman vs Superman', 'Anabelle', 'Lio Messi', 'Cristiano']

        }
    }
}
</script>