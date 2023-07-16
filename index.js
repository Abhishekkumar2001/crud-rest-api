// require the express
const express = require('express');

//port
const port = 5000;

//require the mongoose
const mongoose = require('mongoose');

// import the routes
const devRoute = require('./routes/dev');

//create the app
const app = express();

// connect my app to mongodb database
mongoose.connect("mongodb://127.0.0.1:27017/developers_Data").then(()=>{
    console.log("MongoDB is connected!");
}).catch((err) =>{
    console.log(err);
});

//middleware
app.use(express.json());

app.use("/api/client", devRoute);
//Listen to app
app.listen(port, (err) =>{
    if(err){
        console.log('Problem is running the server');
    }

    console.log(`Server is running the port ${port}`);
})