//create DB Connection
require("dotenv").config();
let { dbConnection } = require("./db-connect/index");
const { videoPost } = require("./models/video-post/index");
const { publishNotification } = require("./sns");
const {
  mapVideoListToSnsParams,
  publishItems,
} = require("./utils/mapVideoListToSnsParams");

const lambda = async () => {
  let x = await dbConnection();
  if (x.status) {
    try {
      videoList = await videoPost.find().sort({ pub_date: -1 }).limit(5).exec();

      publishItems(videoList, process.env.NOTIFICATION_TOPIC_ARN).map(
        (item) => {
          setTimeout(() => {
            publishNotification(item);
          }, 5000);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
};

lambda();

//get Models to get db calls
