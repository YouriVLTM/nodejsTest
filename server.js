const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();
//const https = require('https');






// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//socket json file
app.use(function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header("Access-Control-Allow-Headers", "Content-Type");
       res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
       next();
   });



//var httpserver = http.createServer(httpapp);
//var io = require('socket.io').listen(server);
//var io = require('socket.io').listen(PORT);

//const { Server } = require('ws');

//const io = new Server(app);
const io = socketIO(app);


app.get('/', (req, res) => {
  res.json({"message": "TEST"});
});



app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
