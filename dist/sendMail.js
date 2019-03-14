import nodemailer from "nodemailer";
import config from "./config";
import { reject } from "lodash";
import { resolve } from "path";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    type: "OAuth2",
    ...config
  }
});

const message = {
  from: "no-reply@alkenox-me.com",
  to: "alk3nox@gmail.com",
  subject: "Message title",
  text: "Plaintext version of the message",
  html: "<p>HTML version of the message</p>"
};

const sendMail = (message) => {
  transporter.sendMail(
    message,
    (error, info) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(info);
    }
  );
};

export default sendMail;
