// We’ll declare all our dependencies here
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

//Initialize our app variable
const app = express();

//Declaring Port
const port = 3000;

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'public')));

app.use('/SANetwork',require('./controllers/SANetwork'));

db.connect(function (err) {
    if(err){
        console.log('Unable to connect to MySQL.');
        process.exit(1);
    } else {
        app.listen(process.env.PORT || port, () => {
            console.log(`Starting the server at port ${port}`);
        });
    }
});
