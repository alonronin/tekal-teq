'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Types = Schema.Types;

const users = new Schema({
  email: {type: String, required: true},
  admin: {type: Boolean, default: false}
});

users.statics.get = function(){
  return (req, res, next) => {
    this
      .find()
      .lean()
      .exec((err, results) => {
        if(err) next(err);

        res.json(results);
      });
  };
};

users.statics.post = function(){
  return (req, res, next) => {
    this
      .create(req.body, (err, result) => {
        if(err) next(err);

        res.json(result);
      })
  }
};

users.statics.delete = function(){
  return (req, res, next) => {
    this
      .findByIdAndRemove(req.params.id, (err, result) => {
        if(err) next(err);

        res.end();
      })
  }
};

users.statics.update = function(){
  return (req, res, next) => {
    this
      .findByIdAndUpdate(req.params.id, req.body, (err) => {
        if(err) next(err);

        res.end();
      })
  }
};

module.exports = users;
