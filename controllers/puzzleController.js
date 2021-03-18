const db = require("../models");

module.exports = {
    update: function(req, res) {
        db.Puzzle
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}