

const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", function(request, repsonse){
    response.send("Hello");
});

app.listen(3000, function(){
    console.log("Server started on port 3000")
});
