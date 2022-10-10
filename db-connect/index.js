const mongoose = require("mongoose");
require("dotenv").config();
let dbConnectionResponse;
const dbConnection = async () => {
  try {
    return {
      status: true,
      data: await mongoose.connect(process.env.mongodb, {
        useNewUrlParser: true,
      }),
    };
  } catch (error) {
    return { status: false, message: error.message };
  }
};

module.exports = { dbConnection };
