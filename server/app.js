const http = require("http");
const url = require("url");
var WebSocketServer = require("websocket").server;
const hostname = "127.0.0.1";
const port = 3000;

rooms = ["General"];

const server = http.createServer((req, res) => {
  //runs everytime its loaded
  ret = {};
  res.statusCode = 200;

  const queryObject = url.parse(req.url, true);
  console.log(queryObject);

  if (queryObject.pathname == "/createRoom") {
    var newRoom = queryObject.query.room;
    if (rooms.includes(newRoom)) {
      console.log("Room already exists");
      ret.creationStatus = false;
    } else {
      //create room
      rooms.push(newRoom);
      ret.creationStatus = true;
      //go from there
    }
  } else if (queryObject.pathname == "/joinRoom") {
    var joinRoom = queryObject.query.room;
    if (rooms.includes(newRoom)) {
      console.log("Room exists");
      ret.creationStatus = true;
    } else {
      ret.creationStatus = false;
      //go from there
    }
  }

  console.log(rooms);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Content-Type", "application/json");
  ret.rooms = rooms;
  res.end(JSON.stringify(ret));
});

wsServer = new WebSocketServer({
  httpServer: server,
  // You should not use autoAcceptConnections for production
  // applications, as it defeats all standard cross-origin protection
  // facilities built into the protocol and the browser.  You should
  // *always* verify the connection's origin and decide whether or not
  // to accept it.
  autoAcceptConnections: false,
});

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

wsServer.on("request", function (request) {
  if (!originIsAllowed(request.origin)) {
    // Make sure we only accept requests from an allowed origin
    request.reject();
    console.log(
      new Date() + " Connection from origin " + request.origin + " rejected."
    );
    return;
  }

  var connection = request.accept("echo-protocol", request.origin);
  console.log(new Date() + " Connection accepted.");
  connection.on("message", function (message) {
    if (message.type === "utf8") {
      console.log("Received Message: " + message.utf8Data);
      connection.sendUTF(message.utf8Data);
    } else if (message.type === "binary") {
      console.log(
        "Received Binary Message of " + message.binaryData.length + " bytes"
      );
      connection.sendBytes(message.binaryData);
    }
  });
  connection.on("close", function (reasonCode, description) {
    console.log(
      new Date() + " Peer " + connection.remoteAddress + " disconnected."
    );
  });
});

server.listen(port, hostname, () => {
  //runs when the server is ready
  console.log(`Server running at http://${hostname}:${port}/`);
});
