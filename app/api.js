const ApiModel = require('./models/api.model');
const Promise = require('bluebird');

class Api {
  /**
   * Fild All API records
   * @returns {Promise|Promise<Array>}
   */
  all() {
    return new Promise((resolve, reject) => {
      ApiModel.find({}, (err, result) => {
        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  }

  /**
   * Find API record by _id
   * @param id
   * @returns {Promise|Promise<ApiModel>}
   */
  find(id) {
    return new Promise((resolve, reject) => {
      ApiModel.find({"_id": id}, (err, result) => {
        if (err || 0 === result.length) {
          reject('Record not found', err);
          return;
        }

        resolve(result[0]);
      });
    });
  }

  /**
   * Create new Api record.
   * @param data
   * @returns {Promise|Promise<ApiModel>}
   */
  create(data) {
    let model = new ApiModel(data);

    return new Promise((resolve, reject) => {
      model.save((err, record) => {
        if (err) {
          reject({"message": "Failed to save to db.", "error": err});
          return;
        }

        resolve(record);
      });
    });
  }
}

module.exports = new Api();
