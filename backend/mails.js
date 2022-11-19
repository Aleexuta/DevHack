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
db.once('open', () => {console.log("Database connection established!")


const nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "be17c9a0902a89",
      pass: "00fa0b64f2f67e"
    }
  });

  message = {
    from: "from-example@email.com",
    to: "to-example@email.com",
    subject: "Subject",
    text: "Hello Teodor Email"
}

async function info() {await transport.sendMail(message)};


let date = new Date();
date.setMinutes(date.getMinutes() + 2);
let date2 = new Date();
date2.setMinutes(date2.getMinutes() + 1);


//info()
console.log(date.getMinutes())
// while(1){
 async function ceva(){
  da = new Date();
  // console.log(da.getMinutes())
  // console.log(date2.getMinutes())
  if(da.getMinutes() == date2.getMinutes()){
    console.log("Sended")
    await transport.sendMail(message)
    date2.setMinutes(date2.getMinutes() - 20);
  }
}

setInterval(ceva, 5500);

console.log("ceva");
// }


});




