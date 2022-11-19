require('dotenv').config()

const express = require('express');
const cors = require("cors");
const app = express();


//db connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL,
 { useNewUrlParser: true });

 app.use(express.json());
 app.use(cors());
//connecting to db
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => {console.log("Database connection established!");


const cigaretteSchema = require('./models/cigarettesSmoked');
const profileSchema = require('./models/SmokersProfiles');
const UserSchema = require("./models/users");

const nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "be17c9a0902a89",
      pass: "00fa0b64f2f67e"
    }
  });

async function info(message) {await transport.sendMail(message)};


 async function ceva(){
    let moment = new Date();

    let smokers = await profileSchema.find();

    for(let it = 0; it < smokers.length; it++){
      let result =  await cigaretteSchema.find({smokerId: smokers[it].smokerId})
      let cigToday = new Array();
      for(let i =0; i < result.length; i++){
          if(result[i].time.getDate() == moment.getDate()
                && result[i].time.getMonth() == moment.getMonth()
                  && result[i].time.getYear() == moment.getYear()
          ){
            cigToday.push(result[i]);
          }
      }
      

      let user = await UserSchema.findById( smokers[it].smokerId)

      message = {
      from: 'badhabbits@gmail.com', // sender address
      to: user.email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body}
    }

    

    console.log("Sended")
    await transport.sendMail(message)
  }
}


setInterval(ceva, 5500);

console.log("ceva");
// }


});




