<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/"
          ><v-img
            alt="Wave Logo"
            class="shrink mr-2"
            contain
            src="./images/logo.png"
            transition="scale-transition"
            width="40"
            router
          />
        </router-link>
        <v-img
          alt="Wave Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          width="400"
          style="font-size:4 rem"
        >
          HoWave
        </v-img>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="http://zoomutils.com" target="_blank" text>
        <span class="mr-2">Check out Zoom Utils</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<style>
html {
  overflow-y: auto !important;
}
</style>
<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
