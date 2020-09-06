<template>
  <v-container fluid>
    <h2>Room {{ $route.params.room }}</h2>
    <v-row align="center" justify="center">
      <!-- {{ $route.params.room }} -->

      <v-col cols="12" align="center" justify="center" md="4" lg="4" xl="4">
        <v-text-field
          label="Name"
          placeholder="Enter your name"
          outlined
          v-model="name"
        ></v-text-field>
      </v-col>
      <v-col cols="12" align="center" justify="center" md="6" lg="6" xl="6">
        <v-text-field
          label="Message"
          placeholder="Enter your message"
          outlined
          v-model="message"
        ></v-text-field>
      </v-col>
      <v-col cols="12" justify="center" md="2" lg="2" xl="6">
        <v-btn @click="sendWaveHandler()">Wave Message</v-btn>
      </v-col>
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
const api = "https://howave.herokuapp.com/";

import axios from "axios";
var W3CWebSocket = require("websocket").w3cwebsocket;
import router from "../router";
export default {
  name: "Join",

  data: () => ({
    //
    alert: false,
    alertText: "No Message",
    client: null,
    name: null,
    message: null
  }),
  methods: {
    customAlert(msg) {
      this.alertText = msg;
      this.alert = true;
    },
    sendWaveHandler() {
      var send = {};
      send.room = router.currentRoute.params.room;
      send.message = this.name + " said, " + this.message;
      send.wave = true;
      send.name = this.name;
      send.messageText = this.message;
      this.client.send(JSON.stringify(send));
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
    vueApp.client = new W3CWebSocket(
      "wss://howave.herokuapp.com/",
      "echo-protocol"
    );

    vueApp.client.onerror = function() {
      console.log("Connection Error");
    };

    vueApp.client.onopen = function() {
      console.log("WebSocket Client Connected");
      var send = {};
      send.room = router.currentRoute.params.room;
      send.message = "Client Connected";
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
