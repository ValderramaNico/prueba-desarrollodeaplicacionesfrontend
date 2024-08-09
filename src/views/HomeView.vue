<template>
  <div class="home">
    <h1>Pruebas</h1>
    <hr />
    <br />
    <section>
      <h2 class="titles">Ejercicio 1</h2>
      <ContadorComponent />
    </section>
    <br />
    <hr />
    <section>
      <h2 class="titles">Ejercicio 2</h2>
      <h3 for="">Rutas del "Router"</h3>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link>
      </nav>
    </section>
    <br />
    <hr />
    <section>
      <h2 class="titles">Ejercicio 3</h2>
      <ParentComponent />
    </section>
    <br />
    <hr />
    <FooterComponent />
  </div>
</template>

<script>
import ContadorComponent from "@/components/ContadorComponent.vue";
import ParentComponent from "@/components/ParentComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    ContadorComponent,
    ParentComponent,
    FooterComponent
  },
};
</script>

<style>
.titles {
  margin-left: 4rem;
  text-align: left;
}
</style>
