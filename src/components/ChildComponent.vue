<template>
  <div>
    <form action="">
      <input v-model="inputText" placeholder="Escriba algo" type="text" />
      <button @click.prevent="textSubmit" type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    textSubmit() {
      this.$emit("sent-text", this.inputText);
    },
  },
};
</script>

<style scoped></style>
