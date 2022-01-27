const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyparser = require("body-parser");

const imgRoute = require("./routes/imgRoute");
const cafeRoute = require("./routes/cafeRoute");

const db = require('./model/config');

dotenv.config();
db();

const app = express();

app.use(bodyparser.urlencoded({ extended : true}))
app.use(cors());
app.use(express.json())

app.use('/cafe', cafeRoute);
app.use('/img', imgRoute);


app.use((req, res, next) => {
    res.sendStatus(404);
})
app.use((err, req, res, next) => {
    console.log('서버 폭발!!')
    console.log(err);
    res.sendStatus(500);
})

app.listen(8080);