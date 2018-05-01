const nodemailer = require("nodemailer");
config = require("./config.js");

const utils = {}

function sendEmail(subject, text, dest_email) {
  // create reusable transporter object using the default SMTP transport
  if(!config.sender.user || !config.sender.pass || !config.admin || !config.sender.host)
  {
      return console.log("Error: Email configuration not complete!")
  }

  let transporter = nodemailer.createTransport({
    host: config.sender.host,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: config.sender.user, // generated ethereal user
      pass: config.sender.pass // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: config.sender.user, // sender address
    to: dest_email || config.admin, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
}

utils.newAlertSubmittedEmail = (alert) => {
    const subject = "A new alert has been submitted";
    const body = alert.toString()
    sendEmail(subject, body);
}

utils.alertDoneEmail = (alert) => {
    const subject = "Your submitted alert was taken care of";
    const body = `Thank you ${alert.email},
The SPA has taken care of the alert you submitted. It was a ${alert.status}.
Good day,

The SPA Team.`
    sendEmail(subject, body, alert.email);
}

module.exports = utils;