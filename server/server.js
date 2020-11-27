/*
 * @Server.js
 */
"use strict";


let express = require('express'),
	bodyParser = require('body-parser');



//  create server app
let app = express();
let port = process.env.PORT || 3000;

// parsing
// app.use(bodyParser.text());
//app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client-build/'));


//  run
app.listen(port, () => console.log( "Express server listening on port " + port) );
