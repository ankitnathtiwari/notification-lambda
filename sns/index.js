const AWS = require("aws-sdk");
const region = process.env.indusos;
console.log({ region }, require("dotenv").config(), "dot env value");
var sns = new AWS.SNS({ apiVersion: "2010-03-31", region: region });

const publishNotification = (params) =>
  sns.publish(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log({ data }); // successful response
  });

module.exports = { publishNotification };
