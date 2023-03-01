const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db');
const cors = require('cors');
const colors = require('colors');


connectDB();


const app = express()

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/api/wristflex', require('./routes/userRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))