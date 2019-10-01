const MyModel = require("./model");

exports.list = async (req, res) => {
  const MyData = await MyModel.find()
  return res.send(MyData);
};