const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const todoRoute =  require('./routes/todoRoute');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

connectDB();

app.use('/todos', todoRoute);


const PORT = process.env.PORT || 5000;

app.listen(5000, () =>{ 
    console.log(`Server started on port: ${PORT}`);
});
