const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  endpoint: process.env.API_URL,
  instance: process.env.INSTANCE_NAME,
  Key: process.env.API_KEY,
  id: process.env.DOCUMENT_ID
};