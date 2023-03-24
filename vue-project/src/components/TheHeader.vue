<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>


<template>
    <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="favorites" to="/favorites">Favorites</RouterLink>
        <RouterLink class="stock" to="/">Stock</RouterLink>
        <RouterLink class="deals" to="/deals">Deals</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  header {
    position: relative;

    margin-bottom: 74px;
  }

  header::before {
    content: "";

    position: absolute;

    width: 100%;
    height: 40px;

    background-color: #E0E3EE;
    border-radius: 0px 0px 10px 10px;
  }

  header .wrapper {
    padding-top: 40px;
  }

  nav {
    display: flex;
    justify-content: end;

    margin-top: 20px;
    margin-left: auto;
  }

  nav a {
    position: relative;

    display: block;
    min-width: 86px;
    max-height: 50px;

    padding-top: 30px;
    padding-bottom: 7px;

    color: #2D3B87;
    text-decoration: none;
    text-align: center;

    border-radius: 10px;
  }

  nav a:active,
  nav a:focus {
    background: #F4F5F9;

  }

  nav a::before {
    content: "";

    position: absolute;

    width: 20px;
    height: 20px;

    top: 6px;
    left: 33px;

    background-repeat: no-repeat;
  }

  nav a.stock::before {
    background-image: url("./icons/IconStock.svg");
  }

  nav a.favorites::before {
    background-image: url("./icons/IconFavorites.svg");
  }

  nav a.deals::before {
    background-image: url("./icons/IconDeals.svg");
  }
</style>
