<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <v-btn>Host a room</v-btn>
      </v-col>
      <v-col align="center" justify="center">
        <v-btn>Join a room</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Landing",

  data: () => ({
    //
    rooms: null
  }),
  mounted() {
    axios
      .get("http://65d6f0cc736b.ngrok.io/")
      .then(response => {
        this.rooms = response.rooms;
      })
      .catch(error => {
        console.log(error);
        // this.errored = true
      });
    // .finally(() => this.loading = false)
  }
};
</script>
