const House = require('../models/house');

let houseControllers = {
  showAll: function(req, res) {
    House.find().exec((err, users) => {
      if (err) {
        res.send(err);
      } else {
        res.send(users);
      }
    });
  },
  showOne: function(req, res) {
    House.findOne({
      _id: req.params.id
    }).exec((err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.send(user);
      }
    });
  },
  update: (req, res, next) => {
    let id = req.params.id;
    House.findOne({
      _id: id
    }).exec(function(err, result) {
      if (result) {
        House.update({
          _id: id
        }, {
          $set: {
            title: req.body.title || result.title,
            price: req.body.price || result.price,
            description: req.body.description || result.description,
            author: req.body.author || result.author,
            phone: req.body.phone || result.phone,
            location: req.body.location || result.location
          }
        }, function(err, result) {
          if (result) {
            res.send(result);
          } else {
            res.send(err);
          }
        });
      } else {
        res.send(err);
      }
    });
  },
  create: (req, res, next) => {
    House.create({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      author: req.body.author,
      phone: req.body.phone,
      location: req.body.location
    }, function(err, result) {
      if (result) {
        res.send(result);
      } else {
        res.send(err);
      }
    });
  },
  delete: function(req, res) {
    House.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.send(user);
      }
    });
  }
}

module.exports = houseControllers;
