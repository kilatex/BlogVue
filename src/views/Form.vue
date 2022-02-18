<template>
<div class="center">
      <section id="content" class="bg-form bg-green">

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
  
</style>
<script>
export default {
    name: 'Form'
}
</script>