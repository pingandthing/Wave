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
            <v-card-text>Create a room to receive questions</v-card-text>
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
              <v-btn
                color="success"
                text
                :disabled="cancj"
                @click="createRoomHandler()"
                >Create</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col align="center" justify="center">
        <v-dialog v-model="joinDialog" persistent>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
              Join a Room
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">Join Room</v-card-title>
            <v-card-text
              >Ask questions and get your much needed attention.</v-card-text
            >
            <v-text-field
              label="Room Name"
              placeholder="Enter Room Name Here"
              outlined
              v-model="newRoomName"
              :error-messages="this.textCreateRoom.error"
            ></v-text-field>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error " text @click="joinDialog = false"
                >Cancel</v-btn
              >
              <v-btn
                color="success"
                text
                :disabled="cancj"
                @click="joinRoomHandler()"
                >Join</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <v-divider class="mt-6" />
    <v-container>
      <v-row
        v-for="room in rooms"
        :key="room + ''"
        class="mt-4"
        align="center"
        justify="center"
      >
        <v-btn text :to="'/join/' + room">Join {{ room }}</v-btn>
      </v-row>
    </v-container>

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
var W3CWebSocket = require("websocket").w3cwebsocket;
import router from "../router";

export default {
  name: "Landing",

  data: () => ({
    //
    rooms: null,
    newRoomName: null,
    hostDialog: false,
    joinDialog: false,
    textCreateRoom: {},
    alert: false,
    alertText: "No Message",
    client: null
  }),
  computed: {
    cancj() {
      if (this.newRoomName == null) return true;
      if (this.newRoomName == "") return true;
      return false;
    }
  },
  methods: {
    createRoomHandler() {
      axios
        .get(api + "createRoom?room=" + this.newRoomName)
        .then(response => {
          console.log(response);
          if (response.data.creationStatus) {
            this.hostDialog = false;
            router.push({
              name: "Host",
              params: { room: this.newRoomName }
            });
          } else {
            this.customAlert("Please try another room name!");
          }
          this.newRoomName = null;
        })
        .catch(error => {
          console.log(error);
          // this.errored = true
        });
    },
    joinRoomHandler() {
      this.initRooms();
      if (this.rooms.includes(this.newRoomName)) {
        this.joinDialog = false;
        this.customAlert("Entering " + this.newRoomName);
        router.push({
          name: "Join",
          params: { room: this.newRoomName }
        });
      } else {
        this.customAlert(
          this.newRoomName + "is an invalid room name, Try again!"
        );
      }
      this.newRoomName = null;
    },

    customAlert(msg) {
      this.alertText = msg;
      this.alert = true;
    },
    initRooms() {
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
    }
  },
  mounted() {
    console.log(this);
    var vueApp = this;
    this.initRooms();
    // eslint-disable-line
    vueApp.client = new W3CWebSocket("ws://localhost:3000/", "echo-protocol");

    vueApp.client.onerror = function() {
      console.log("Connection Error");
    };

    vueApp.client.onopen = function() {
      console.log("WebSocket Client Connected");
      var send = {};
      send.room = "General";
      send.message = "New User";
      vueApp.client.send(JSON.stringify(send));

      // function sendNumber() {
      //   if (client.readyState === client.OPEN) {
      //     var number = Math.round(Math.random() * 0xffffff);
      //     client.send(number.toString());
      //     setTimeout(sendNumber, 1000);
      //   }
      // }
      // sendNumber();
    };

    vueApp.client.onclose = function() {
      console.log("echo-protocol Client Closed");
    };

    vueApp.client.onmessage = function(e) {
      if (typeof e.data === "string") {
        console.log("Received: '" + e.data + "'");
      }
    };
  }
};
</script>
