<template>
  <div class="center form-flex">
    <div class="form-vue">
      <h1 class="subheader">Form</h1>

      <form class="mid-form">
        <div class="form-group">
          <label for="nombre">Name</label>
          <input type="text" name="name" v-model="user.name" />

          <div class="alert-red " v-if="v$.user.name.$error">
              Invalid Name
          </div>
        </div>

        <div class="form-group">
          <label for="apellidos">Last Name</label>
          <input type="text" name="surname" v-model="user.surname" />
           <div class="alert-red " v-if="v$.user.surname.$error">
               Invalid Surname
          </div>
        </div>

        <div class="form-group">
          <label for="bio">Biography</label>
          <textarea name="bio" v-model="user.biography"></textarea>
             <div class="alert-red " v-if="v$.user.biography.$error">
               Invalid Biography
          </div>
        </div>

        <div class="form-group radiobuttons">
          <div class="radio-box">
            <input
              type="radio"
              name="genero"
              value="Man"
              id="man"
              v-model="user.gender"
            />
            <label for="man">Man</label>
          </div>

          <div class="radio-box d-flex">
            <input
              type="radio"
              name="genero"
              value="Woman"
              id="woman"
              v-model="user.gender"
            />
            <label for="woman">Woman</label>
          </div>

          <div class="radio-box d-flex">
            <input
              type="radio"
              name="genero"
              value="Other"
              id="other"
              v-model="user.gender"
            />
            <label for="other">Other</label>
          </div>
        </div>

        <input
          type="button"
          value="Submit"
          @click="showInfo()"
          class="btn-submit btn-form"
        />
      </form>
    </div>

    <div class="info-form" v-if="show">
      <h2>Form Info</h2>
      <div class="info-user" v-html="agroupInfoForm"></div>
    </div>
  </div>
</template>

<style>
.form-vue {
  width: 40%;
  margin-bottom: 50px;
}
.form-flex {
  display: flex;
  justify-content: space-around;
}
.info-user {
  text-align: start;
}
.alert-red{
    display: inline-block;
    font-weight: bold;
    text-align: start;
    background: red;
    padding: 0px 10px;
}
@media (max-width: 814px) {
    .form-flex{
      display: block !important;
      margin-bottom: 20px;
    }
  }
</style>
<script>
import useVuelidate from '@vuelidate/core'
import { required,minLength } from '@vuelidate/validators'

export default {
    name: 'Form',
    components:{
    },
    
    validations(){
       return{
            user:{
                name: {
                    required,
                    minLength: minLength(2)
                },
                surname: {
                    required,
                    minLength: minLength(2)
                },
                biography: {
                    required,
                    minLength: minLength(5)

                }        
            } 
       } 

    },
    computed:{
        agroupInfoForm(){
            const info= "<strong> Name: "+this.user.name+"</strong> <br/>"+
                        "<strong> Last Name: "+this.user.surname+"</strong> <br/>"+
                        "<strong> Gender: "+this.user.gender+"</strong> <br/>"+
                        "<hr> Biography:  "+this.user.biography;


            return info;
                      

        }
    },
    methods:{
        showInfo(){

            if(this.user.name  && this.user.surname && this.user.biography  && this.user.gender ){
                this.show = true;
                this.v$.$validate();
            }
         
      
        }

    },
    data(){
        return{
            v$: useVuelidate(),
            user:{
                name: '',
                surname: '',
                biography: '',
                gender: ''
            },
            show : false
        }
    }
}
</script>