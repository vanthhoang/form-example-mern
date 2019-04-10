
const express = require('express');
const mongoose = require('mongoose');
////const path = require('path');
//const config = require('config');
const forms = require('./routes/api/forms')

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB configuration 
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true
}) // Adding new mongo url parser
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/forms', forms);       // anything that goes to api/forms should refer to the file forms.js in routes/api

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
