<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <v-dialog v-model="hostDialog" persistent>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
              Host a Room
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">Create Room</v-card-title>
            <v-card-text>dsfdsfdsfsdfsdfdsfdsg.</v-card-text>
            <v-text-field
              label="Room Name"
              placeholder="Create Room Here"
              outlined
              v-model="newRoomName"
              :error-messages="this.textCreateRoom.error"
            ></v-text-field>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error " text @click="hostDialog = false"
                >Cancel</v-btn
              >
              <v-btn color="success" text @click="createRoomHandler()"
                >Create</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col align="center" justify="center">
        <v-btn>Join a room</v-btn>
      </v-col>
    </v-row>
    {{ this.rooms }}
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
const api = "http://65d6f0cc736b.ngrok.io/";
import axios from "axios";
var W3CWebSocket = require("websocket").w3cwebsocket;
export default {
  name: "Landing",

  data: () => ({
    //
    rooms: null,
    newRoomName: null,
    hostDialog: false,
    textCreateRoom: {},
    alert: false,
    alertText: "No Message"
  }),
  methods: {
    createRoomHandler() {
      axios
        .get(api + "createRoom?room=" + this.newRoomName)
        .then(response => {
          console.log(response);
          if (response.data.creationStatus) this.hostDialog = false;
          else {
            this.newRoomName = null;
            this.customAlert("Please try another room name!");
          }
        })
        .catch(error => {
          console.log(error);
          // this.errored = true
        });
    },
    customAlert(msg) {
      this.alertText = msg;
      this.alert = true;
    }
  },
  mounted() {
    console.log(this);
    axios
      .get(api)
      .then(response => {
        this.rooms = response.data.rooms;
      })
      .catch(error => {
        console.log(error);
        // this.errored = true
      });
    // .finally(() => this.loading = false)
    // eslint-disable-line
    var client = new W3CWebSocket("ws://localhost:3000/", "echo-protocol");

    client.onerror = function() {
      console.log("Connection Error");
    };

    client.onopen = function() {
      console.log("WebSocket Client Connected");

      function sendNumber() {
        if (client.readyState === client.OPEN) {
          var number = Math.round(Math.random() * 0xffffff);
          client.send(number.toString());
          setTimeout(sendNumber, 1000);
        }
      }
      sendNumber();
    };

    client.onclose = function() {
      console.log("echo-protocol Client Closed");
    };

    client.onmessage = function(e) {
      if (typeof e.data === "string") {
        console.log("Received: '" + e.data + "'");
      }
    };
  }
};
</script>
