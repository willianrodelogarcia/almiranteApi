const express = require("express");

const app = express();


//settings
app.set('port',process.env.PORT || 1337);

//Middlewares
app.use(express.json());

//Routes

app.get('/',(res)=>{
    res.send('Hello word');
});

//app.use(require('./routes/apirestserver'));


app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'));
});