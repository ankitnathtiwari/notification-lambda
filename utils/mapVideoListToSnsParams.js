const mapVideoListToSnsParams = (item) => {
  let payload = {
    default: "default",
    GCM: {
      notification: {
        title: item.title,
      },
    },
  };

  payload.GCM = JSON.stringify(payload.GCM);
  payload = JSON.stringify(payload);
  console.log(payload);
  return payload;
};

const publishItems = (payloads, targetArn) =>
  payloads.map((item) => {
    return {
      Message: mapVideoListToSnsParams(item),
      TargetArn: targetArn,
      MessageStructure: "json",
    };
  });

module.exports = { publishItems };
