const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = {
  host: "localhost",
  port: 27017,
  dbname: "mock_api"
};

mongoose.connect(`mongodb://${config.host}:${config.port}/${config.dbname}`);

let apiSchema = new Schema({
  status: Number,
  content: String,
  body: String,
  created_at: Date
});

let ApiModel = mongoose.model('ApiModel', apiSchema);

module.exports = ApiModel;
