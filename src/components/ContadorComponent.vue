<template>
  <h2>{{ tituloApp }}</h2>
  <p class="counter">{{ contador }}</p>

  <div>
    <button class="btn primary" v-on:click="incrementar">+1</button>
    <button class="btn warning" v-on:click="disminuir">-1</button>
  </div>
</template>

<script>
export default {
  name: "ContadorComponent",
  props: {
    titulo: String,
    inicio: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      contador: this.inicio,
    };
  },
  methods: {
    incrementar() {
      this.contador++;
    },

    disminuir() {
      this.contador--;
    },
  },
  computed: {
    tituloApp() {
      return this.titulo || "Contador";
    },
  },
};
</script>

<style>
.btn {
  border-radius: 1rem;
  margin: 0 5px;
  width: 100px;
  padding: 5px;
  font-size: 1rem;
}
.primary {
  background-color: rgb(15, 15, 133);
  color: rgb(255, 255, 255);
}
.counter {
  font-size: 36px;
}

.warning {
  background-color: rgb(163, 15, 15);
  color: rgb(255, 255, 255);
}
</style>
