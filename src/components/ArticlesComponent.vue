<template>
  <section id="content">
    <h2 class="subheader">Lastest Posts</h2>

    <!--Listado articulos-->
    <div id="articles">
      <article class="article-item" id="article-template">
        <div class="image-wrap">
          <img src="../images/1.jpg" alt="Paisaje">
        </div>
        <h2>Post</h2>
        <span class="date"> Two Days Ago </span>
        <a href="#">Read More</a>

        <div class="clearfix"></div>
      </article>

      <!--AÑADIR ARTICULOS VIA JS-->
    </div>
  </section>
</template>

<script>
export default {
  name: "ArticlesComponent",
};

window.addEventListener("load", function () {
  var template = document.getElementById("article-template");
  var articles = document.getElementById("articles");

  for (var i = 1; i <= 5; i++) {
    var clonado = template.cloneNode(true);
    clonado.removeAttribute("id");

    var h2 = clonado.getElementsByTagName("h2")[0];
    h2.innerHTML = h2.textContent + " " + i;

    articles.appendChild(clonado);
  }
});
</script>