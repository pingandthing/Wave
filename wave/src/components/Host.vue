<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      {{ $route.params.room }}
      <v-col align="center" justify="center"> </v-col>
    </v-row>

    <v-snackbar v-model="alert" :multi-line="true" timeout="7500">
      {{ alertText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="alert = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
const api = "http://localhost:3000/";

import axios from "axios";
import router from "../router";
var W3CWebSocket = require("websocket").w3cwebsocket;
export default {
  name: "Host",

  data: () => ({
    //
    alert: false,
    alertText: "No Message",
    client: null
  }),
  methods: {
    customAlert(msg) {
      this.alertText = msg;
      this.alert = true;
    }
  },
  mounted() {
    var vueApp = this;
    console.log(this);
    axios
      .get(api)
      .then(response => {
        console.log(response);
        //  this.rooms = response.data.rooms;
      })
      .catch(error => {
        console.log(error);
        // this.errored = true
      });
    // .finally(() => this.loading = false)
    // eslint-disable-line
    vueApp.client = new W3CWebSocket("ws://localhost:3000/", "echo-protocol");

    vueApp.client.onerror = function() {
      console.log("Connection Error");
    };

    vueApp.client.onopen = function() {
      console.log("WebSocket Client Connected");
      var send = {};
      send.room = router.currentRoute.params.room;
      send.message = "Host Connected";
      vueApp.client.send(JSON.stringify(send));
    };

    vueApp.client.onclose = function() {
      console.log("echo-protocol Client Closed");
    };

    vueApp.client.onmessage = function(e) {
      if (typeof e.data === "string") {
        console.log("Received: '" + e.data + "'");

        var wsData = JSON.parse(e.data);
        if (wsData.room == router.currentRoute.params.room)
          vueApp.customAlert(wsData.message);
      }
    };
  }
};
</script>
