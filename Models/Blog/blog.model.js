const { getCollection } = require("../../Utils/connect-database");
const { ObjectId } = require("mongodb");

const QuertAddPost = async (data, collection) => {
  console.log(data);
  try {
    const result = await getCollection(collection).insertOne(data);
    console.log(await result);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = { QuertAddPost };
