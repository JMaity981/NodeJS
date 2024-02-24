const nodemailer = require("nodemailer");
 
const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'westley80@ethereal.email',
        pass: 'x52Gp23uWX5cWBUXmg'
    }
});

  let info = await transporter.sendMail({
    from: '"Jayanta Maity" <jayanta@gmail.com>', // sender address
    to: "jayanta.flamingostech@gmail.com", // list of receivers
    subject: "Welcome Mail", // Subject line
    text: "Hello Jayanta", // plain text body
    html: "<h1>Hello Jayanta</h1>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;