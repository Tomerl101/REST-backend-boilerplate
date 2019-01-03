const Sport = require('../models/sport');

exports.get_all = (req, res, next) => {
  Sport.find({}, (err, sports) => {
    if (err) return next({ status: 500, error: 'ERROR', description: JSON.stringify(err) });
    res.json(sports);
  })
}

exports.find_byId = (req, res, next) => {
  Sport.findOne({ id: req.params.id }, (err, sport) => {
    if (err) return next({ status: 500, error: 'ERROR', description: JSON.stringify(err) });
    if (!sport) return next({ status: 404, error: 'NOT_FOUND', description: 'Cant find by this id' });
    res.json(sport);
  })
};

exports.create = (req, res, next) => {
  const { id, name, participants, distance, best_time } = req.body;
  const style = { distance, participants, best_time };
  const sport = new Sport({ id, name, style });

  sport.save(function (err, sport) {
    if (err) return next({ status: 500, error: 'ERROR', description: JSON.stringify(err) });
    res.json(sport);
  })
};


exports.updateBestTime_byId = (req, res, next) => {
  const { id, best_time } = req.body;
  Sport.findOneAndUpdate({ id }, { "style.best_time": best_time }, { new: true }, (err, sport) => {
    if (err) return next({ status: 500, error: 'ERROR', description: JSON.stringify(err) });
    if (!sport) return next({ status: 404, error: 'NOT_FOUND', description: 'Cant find by this id' });
    res.json(sport);
  })
};

exports.delete_byId = (req, res, next) => {
  const { id } = req.params;
  Sport.findOneAndDelete({ id }, (err, sport) => {
    if (err) return next({ status: 500, error: 'ERROR', description: JSON.stringify(err) });
    if (!sport) {
      return next({ status: 404, error: 'NOT_FOUND', description: 'Cant find by this id' })
    }
    res.json(sport);
  })
};