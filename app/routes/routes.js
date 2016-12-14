const express = require('express');
const router = express.Router();
const path = require('path');
const Api = require('../api');

/**
 * Home Page
 */
router.route('/').get((req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));

});

/**
 * Create New Record Route
 */
router.route('/create').post((req, res) => {

  let data = {
    status: req.body.status,
    content: req.body.content,
    body: req.body.body
  };

  Api.create(data)
    .then(
      record => res.send({id: record._id}),
      err => res.status(500).send(err)
    )
});

/**
 * Find Record Route
 */
router.route('/:id').get((req, res)  => {
  let id = req.params.id;

  Api.find(id)
    .then(
      record => {
        res.setHeader('Content-Type', record.content);
        res.status(record.status);
        res.send(record.body)
      },
      err => res.status(404).send(err)
    )
});

module.exports = router;
