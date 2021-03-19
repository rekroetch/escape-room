const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Puzzle
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Puzzle
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.Puzzle
          .findOneAndUpdate({ _id: req.params.id }, { $set: { isSolved: true }})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
}