const Sport = require('../models/sport');

exports.get_all = (req, res, next) => {
  Sport.find({}, (err, sports) => {
    if (err) return next(err);
    res.send(sports);
  })
}

exports.create = (req, res, next) => {
  const { id, name, participants, distance, best_time } = req.body;
  const style = { distance, participants, best_time };
  const sport = new Sport({ id, name, style });

  sport.save(function (err, sport) {
    if (err) return next(JSON.stringify(err));
    res.send(sport);
  })
};

exports.find_byId = (req, res, next) => {
  Sport.find({ id: req.params.id }, (err, sport) => {
    if (err) return next(JSON.stringify(err));
    res.send(sport);
  })
};


exports.updateBestTime_byId = (req, res, next) => {
  const { best_time } = req.body;
  const { id } = req.params;
  Sport.findOneAndUpdate({ id }, { "style.best_time": best_time }, { new: true }, (err, sport) => {
    if (!sport) return next(JSON.stringify(err));
    res.send(sport);
  })
};

exports.delete_byId = (req, res, next) => {
  Sport.deleteOne({ id: req.params.id }, (err, sport) => {
    if (err) return next(JSON.stringify(err));
    res.send(sport);
  })
};