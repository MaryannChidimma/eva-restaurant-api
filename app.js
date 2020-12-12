const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("logged to database"))
    .catch(err => console.error('could not connect to mongo db....', err))


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
        return res.status(200).json({})
    }
    next();
});
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/',(req,res,next)=>{
    res.status(200).json({server:'server is life'});
});

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message,
        success: false
    });
});


module.exports = app;
