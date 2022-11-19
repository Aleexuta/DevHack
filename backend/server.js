require('dotenv').config()

const express = require('express');
const cors = require("cors");
const app = express();


//db connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL,
 { useNewUrlParser: true });


//connecting to db
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log("Database connection established!"));


app.use(express.json());
app.use(cors());

// const testRoute = require('./routes/users');
// app.use('/users', testRoute);

const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

const smokerProfileRouter = require('./routes/smokerProfiles');
app.use('/smokerProfile',smokerProfileRouter);

const cigarettesRouter = require('./routes/cigarettesSmoked');
app.use('/cigarettes',cigarettesRouter);




//sv listening
app.listen(process.env.SV_PORT,  () =>{
     console.log('Server is running on port ' + process.env.SV_PORT + " ...")
});

