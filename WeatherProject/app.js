const { response } = require("express");
const express =  require("express");     //requiring the express module
const https =  require("https");

const app =  express();  //initalising the new express app

app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=21690a08aef236d32e2b6078e159bd77";
    
    https.get(url, function(reponse){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            res.write("<p>The weather is currrently" + weatherDescription + "</p>");
            res.write("<h1>The temperature in My area" + temp + "degrees Celsius.</h1>");
            res.send()
        })   // calling the reponse for when we receive data from the weather web site.
    })
})





app.listen(3000, function(){     // listening on port 3000m and adding a call back function
    console.log("Server running on port 3000.")
})