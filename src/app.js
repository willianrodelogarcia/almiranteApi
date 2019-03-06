const express = require("express");

const app = express();


//settings
app.set('port',process.env.PORT || 1337);


//Middlewares
app.use(express.json());

//Routes
app.use(require('./routes/apirestserver'));
/*app.get('/', function (req, res) {
    res.send('Hello World!');
});*/




app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'));
});

module.exports = app;