const nodemailer = require("nodemailer");

const mailer = (req, res, next) => {
  console.log(req.body);
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>`;

  // create reusable transporter object using the default SMTP transport

  // let transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: process.env.STUDIO_OWNER, // generated ethereal user
  //     pass: process.env.PASS // generated ethereal password
  //   },
  //   tls: {
  //     rejectUnauthorized: false
  //   }
  // });

  let transporter = nodemailer.createTransport({
    service: "Mailgun",
    auth: {
      user: process.env.MAILGUN, // postmaster@sandbox[base64 string].mailgain.org
      pass: process.env.PASS // You set this.
    },

    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols

  // let mailOptions = {
  //   from: '"Personal Project Radiant Yoga Studio" <liyageswafford@gmail.com>', // sender address
  //   to: "liswafford@yahoo.com", // list of receivers
  //   subject: "Radiant Yoga Customer Request", // Subject line
  //   text: "Hello world?", // plain text body
  //   html: output // html body
  // };

  let message = {
    from: '"Personal Project Radiant Yoga Studio" <liyageswafford@gmail.com>',
    to: "liswafford@yahoo.com", // comma separated list
    subject: "Radiant Yoga Customer Request",
    text: "Text contents.",
    html: output
  };

  // send mail with defined transport object

  //   transporter
  //     .sendMail(mailOptions)
  //     .then(info => {
  //       console.log(info);
  //       res.status(200).json("success");
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       res.status(500).json("fail");
  //     });

  transporter.sendMail(message, function(error, info) {
    if (error) {
      res.status(500).json("fail");
      console.log(error);
    } else {
      res.status(200).json("success");
      console.log("Sent: " + info.response);
    }
  });
};

module.exports = {
  mailer
};
