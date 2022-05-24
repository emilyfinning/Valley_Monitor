const getFarmList = async (client, email) => {
  const params = {
    TableName: "Farm",
    IndexName: "userEmail-index",
    KeyConditionExpression: "userEmail = :email",
    ExpressionAttributeValues: {
      ":email": email,
    },
  };

  const items = await client
    .query(params, (err, data) => {
      if (err) {
        console.log(err);
      }
    })
    .promise();

  let farms = [];

  for (item of items["Items"]) {
    farms.push({
      id: item.farmId,
      name: item.farmName,
      accent: item.accentColour,
    });
  }

  return { farms };
};

module.exports = { getFarmList };
