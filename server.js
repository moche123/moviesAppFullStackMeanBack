const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const app = express();


//SETTINGS
app.set('port',process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

//ROUTES
app.use(require("./routes/index.routes")); 
app.use(require("./routes/movie.routes")); 
app.use(require("./routes/user.routes")); 
app.use((req, res) => {
    res.send("404");
});
module.exports = app;