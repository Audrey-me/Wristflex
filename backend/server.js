const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express')
const forgotPasswordRoute = require('./routes/forgotPassword');
const productRoute = require('./routes/productRoute');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db');
const cors = require('cors');
const colors = require('colors');


connectDB();


const app = express()

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(cors());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/wristflex/products", productRoute)
app.use('/api/wristflex', require('./routes/userRoutes'))
app.use('/api/wristflex/password-reset', forgotPasswordRoute)

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.listen(port, () => console.log(`Server started on port ${port}`))