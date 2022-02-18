<template>
<div class="form-vue">
      <section class="">

                <h1 class="subheader">Form</h1>

                <form class="mid-form ">
                     <div class="form-group">
                         <label for="nombre">Name</label>
                         <input type="text" name="name" />
                     </div>
 
                     <div class="form-group">
                         <label for="apellidos">Last Name</label>
                         <input type="text" name="surname" />
                     </div>
 
                     <div class="form-group">
                         <label for="bio">Biography</label>
                         <textarea name="bio"></textarea>
                     </div>
 
                     <div class="form-group radiobuttons">
                         <div class="radio-box">
                             <input type="radio" name="genero" value="man" id="man" /> 
                             <label for="man">Man</label>
                         </div>
 
                         <div class="radio-box d-flex">
                             <input type="radio" name="genero" value="man" id="woman" /> 
                             <label for="woman">Woman</label>
                         </div>
 
                         <div class="radio-box d-flex">
                             <input type="radio" name="genero" value="man" id="other" /> 
                             <label for="other">Other</label>
                         </div>
 
                     </div>
 
 
                     <input type="submit" value="Submit" class="btn-submit  btn-form" />
 
                </form>
                
            </section>
</div>
      

</template>

<style>
  .form-vue{
    margin: auto;
    width: 40%;
    background: #09a330;
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 10px 00px 20px 0px; 
  }
</style>
<script>
export default {
    name: 'Form'
}
</script>