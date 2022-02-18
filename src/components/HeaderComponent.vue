<template>
    <header class="header">
        <div class="center">
            <!-- LOGO -->
            <div id="logo">
                <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
                <span id="brand">
                    <strong>Vue</strong>Website
                </span>
            </div>
            
            <!-- MENU -->
            <nav id="menu">
                <ul>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="blog.html">Blog</a>
                    </li>
                    <li>
                        <a href="form.html">Form</a>
                    </li>
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
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
    name: 'Header'
}
</script>