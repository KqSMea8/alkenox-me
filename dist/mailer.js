const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
const auth = {
  auth: {
    api_key: "a79d6361e19223a5e3a8514b80f41883-9ce9335e-bf1422c5",
    domain: "mg.alkenox-me.com"
  },
  proxy: false // optional proxy, default is false
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

nodemailerMailgun.sendMail(
  {
    from: "no-reply@alkenox-me.com",
    to: "alk3nox@gmail.com", // An array if you have multiple recipients.
    // cc: "alkenox.me@gmail.com",
    // bcc: "ksiaopao@gmail.com",
    subject: "A message from the board!",
    "h:Reply-To": "no-reply@alkenox-me.com",
    //You can use "html:" to send HTML email content. It's magic!
    html: "<p id='kontakt'></p>",
    //You can use "text:" to send plain-text content. It's oldschool!
    text: axios.get('/contact-us')
  },
  (err, info) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      console.log(`Response: ${info}`);
    }
  }
);
