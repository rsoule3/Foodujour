var express = require('express');
var EntriesAPI = express.Router();

EntriesAPI.get('/', function(req, res) {
  Entry.all()
    .then(function(entries) {
      res.send(entries);
    });
});

EntriesAPI.post('/', function(req, res) {
  Entry.create(req.body)
    .then(function(newEntry) {
      res.status(201).send(newEntry);
    });
});

module.exports = EntriesAPI;
