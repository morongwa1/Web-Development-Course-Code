
const express = require("express");
const bodyParser = require("body-parser");    //requiring the express module


const app = express();  //initalising the new express app

app.set('view engine', 'ejs'); //telling our app that is crested wiht express to use ejs


app.get("/", function (req, res) {

    var today = new Date();
    var currrentDay = today.getDay();
    var day = "";

    // if (currrentDay === 6 || currentDay === 0){
    //     day = "Weekend";
    // }else{
    //     day = "Weekday";
    // }

    //Replacing the IF statement with a switch statement because we have more than 5 conditionds to test.
    switch (currrentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Error: current day is equal to:" + currrentDay);
    }

    res.render("list", { kindOfDay: day });
    //res.send("Hello");  //This allows us to do some stuff on our server and then send the response.
});


app.listen(3000, function () {     // listening on port 3000 and adding a call back function and the (process.env.PORT) is for heroku server
    console.log("Server running on port 3000.")
});


