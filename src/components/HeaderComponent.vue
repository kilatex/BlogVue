<template>
  <header class="header">
    <div class="center">
      <!-- LOGO -->
      <div id="logo">
        <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
        <span id="brand"> <strong>Vue</strong>Website </span>
      </div>

      <!-- MENU -->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/" active-class="active">Home</router-link>
          </li>
          <li>
            <router-link to="/about" active-class="active">About</router-link>
          </li>
          <li>
            <router-link to="/form" active-class="active">Form</router-link>
          </li>
          <li>
            <router-link to="/article-detail" active-class="active"
              >Page 1</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Page', params: { id: 'Esto llega por URL' } }"
              active-class="active"
              >Page 2</router-link
            >
          </li>
        </ul>
      </nav>

      <!--LIMPIAR FLOTADOS-->
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>