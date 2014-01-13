var express = require('express');
var fs = require('fs');
var app = express();
//var buffer = [];

app.use(express.logger());

var filePath = "index.html";

app.get('/', function(request, response) {
    fs.readFileSync(filePath, {encoding: 'utf-8'}, function(err,data){
        if (!err){
            response.send(data);
        }else{
            console.log(err);
        }

    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
