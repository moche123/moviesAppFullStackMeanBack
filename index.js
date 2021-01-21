// Read environment variables
require('dotenv').config();

const app = require('./server');
require('./database');


app.listen(app.get('port'),()=>{
    console.log('Server is listening on port: ',app.get('port'));
})