const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

rooms = ["General"]

const server = http.createServer((req, res) => { //runs everytime its loaded
  ret = {}
  res.statusCode = 200;
   const queryObject = url.parse(req.url,true);
   console.log(queryObject)

   if(queryObject.pathname == "/createRoom"){
    var newRoom = queryObject.query.room
    if(rooms.includes(newRoom)){
      console.log("Room already exists")
    }
    else{
      //create room
      rooms.push(newRoom)
      //go from there
    }
   }

  console.log(rooms)
  res.setHeader('Content-Type', 'application/json');
  ret.rooms = rooms
  res.end(JSON.stringify(ret));
});

server.listen(port, hostname, () => { //runs when the server is ready
  console.log(`Server running at http://${hostname}:${port}/`);
});
