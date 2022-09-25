const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//configure database and mongoose
mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database is connected");
    })
    .catch(err => {
        console.log({ database_error: err });
    });

//registering cors
app.use(cors());

// to set view engine
app.set("view engine", "ejs");
app.use(express.static('assets'));

//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use morgan
app.use(morgan('dev'));

//Routes
const Routes = require("./route/routes"); //bring in our user routes
app.use('/', Routes);

//Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('App is running on ' + PORT);
});