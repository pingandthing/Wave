<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <v-dialog v-model="hostDialog" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
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
           v-model = "newRoomName"
         ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error " text @click="hostDialog = false">Cancel</v-btn>
          <v-btn color="success" text @click="createRoomHandler()">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

      </v-col>
      <v-col align="center" justify="center">
        <v-btn>Join a room</v-btn>
      </v-col>
    </v-row>
    {{this.rooms}}
  </v-container>
</template>

<script>
const api = "http://65d6f0cc736b.ngrok.io/"
import axios from "axios";
export default {
  name: "Landing",

  data: () => ({
    //
    rooms: null,
    newRoomName: null,
    hostDialog: false
  }),
  methods:{
    createRoomHandler(){
      axios.get(api+"createRoom?room=" +this.newRoomName ).then(response => {
        console.log(response)
        this.rooms = response.data.rooms;
        console.log(this)
      })
      .catch(error => {
        console.log(error);
        // this.errored = true
      });
      this.hostDialog = true;
    }
  },
  mounted() {
    axios
      .get(api)
      .then(response => {
        console.log(response)
        this.rooms = response.data.rooms;
        console.log(this)
      })
      .catch(error => {
        console.log(error);
        // this.errored = true
      });
    // .finally(() => this.loading = false)
  }
};
</script>
