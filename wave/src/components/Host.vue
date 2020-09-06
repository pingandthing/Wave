<template>
  <v-container fluid>
    <v-row align="center">
      <h2 class="ms-2">Room {{ $route.params.room }}</h2>
      <v-switch
        class="ms-2"
        v-model="wave"
        :label="`Wave: ${wave ? 'on' : 'off'}`"
        :disabled="messages.length < 1"
      ></v-switch>
      <v-btn class="ms-2" @click="this.messages = []">Clear all messages</v-btn>
      <v-btn class="ms-2" @click="deleteRoomHandler()">Delete Room</v-btn>
      <v-btn class="ms-2" @click="joinLink()"
        >Copy join link to Clipbpard</v-btn
      >
    </v-row>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center" v-if="wave">
        <v-img src="../images/wave.gif" height="65vh" :contain="true"></v-img>
      </v-col>
      <v-col
        align="center"
        justify="center"
        class="overflow-y-auto"
        style="height:65vh"
      >
        <v-container height="65vh">
          <v-row dense>
            <v-col cols="12" v-if="wave">
              <v-card v-for="message in messages" :key="message" class="mt-4">
                <v-card-title class="headline">{{ message.name }}</v-card-title>

                <v-card-subtitle>{{ message.message }}</v-card-subtitle>

                <v-card-actions>
                  <v-btn text @click="dismissHandler(message)">Dismiss</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
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
import router from "../router";
var W3CWebSocket = require("websocket").w3cwebsocket;

export default {
  name: "Host",

  data: () => ({
    //
    alert: false,
    alertText: "No Message",
    client: null,
    wave: false,
    waveImg: "../images/wave.gif",
    messages: []
  }),
  methods: {
    customAlert(msg) {
      this.alertText = msg;
      this.alert = true;
    },
    getImgUrl(pic) {
      return require(pic);
    },
    dismissHandler(input) {
      this.messages = this.messages.filter(
        message => message.message != input.message
      );
      if (this.messages.length < 1) {
        this.wave = false;
      }
    },
    deleteRoomHandler() {
      axios
        .get(api + "deleteRoom?room=" + router.currentRoute.params.room)
        .then(response => {
          console.log(response);
          if (response.data.deletionStatus) {
            router.push({
              name: "Landing"
            });
          } else {
            this.customAlert("Room Deletion Failed");
          }
        });
    },
    joinLink() {
      console.log(window);
      navigator.clipboard.writeText(
        window.location.origin + "/join/" + router.currentRoute.params.room
      );
      this.customAlert("Link Copied");
    },
    playWoosh() {
      var context = new AudioContext();
      if (context.state == "running") {
        var audio = new Audio("woosh.mp3");
        audio.volume = 1;
        audio.play();
      }
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
      "ws://howave.herokuapp.com/",
      "echo-protocol"
    );

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
        if (wsData.room == router.currentRoute.params.room) {
          vueApp.playWoosh();
          console.log(wsData);
          if (wsData.wave) {
            vueApp.wave = true;
            vueApp.customAlert(wsData.message);
            vueApp.messages.unshift({
              name: wsData.name,
              message: wsData.messageText
            });
          } else vueApp.customAlert(wsData.message);
        }
      }
    };
  }
};
</script>
