<template>
  <div class="App">
    <h1>Lit with Vue</h1>
    <p>LitNodeClientVersion: {{ LitNodeClientVersion }}</p>
    <p>Check console</p>
    <button @click="instantiateLit">Instantiate Lit</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { litSetup, LitNodeClientVersion } from "lit-client-setup";

export default defineComponent({
  name: "App",
  data() {
    return {
      LitNodeClientVersion: LitNodeClientVersion,
    };
  },
  methods: {
    async instantiateLit() {
      await litSetup();
    },
  },
});
</script>

<style scoped>
.App {
  text-align: center;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
