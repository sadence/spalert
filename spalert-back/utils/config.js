const config = {
  sender: {
    user: process.env.SENDER_USER,
    pass: process.env.SENDER_PASS,
    host: process.env.SENDER_HOST,
  },
  admin: process.env.ADMIN_MAIL,
};

module.exports = config;