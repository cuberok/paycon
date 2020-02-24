<template>
  <v-app>
    <v-app-bar height="44" app color="#7bd01e" dark>
      <a class="selfLink" href="/">Paycon</a>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>


<style lang="scss" >
.selfLink {
  text-decoration: none;
  color: #fff !important;
  font-weight: bold;
  font-size: 20px;
}
</style>
