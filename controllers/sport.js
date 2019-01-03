const ApiError = require('../utils/apiError');
const Sport = require('../models/sport');

exports.get_all = (req, res, next) => {
  Sport.find({}, (err, sports) => {
    if (err) return next(ApiError.ServerError);
    res.json(sports);
  })
}

exports.find_byId = (req, res, next) => {
  var error = new Error("error test");
  error.code = "ERROR_TEST";
  error.status = 404;
  Sport.findOne({ id: req.params.id }, (err, sport) => {
    if (err) return next(ApiError.ServerError);
    if (!sport) return next(ApiError.NotFoundError);
    res.json(sport);
  })
};

exports.create = (req, res, next) => {
  const { id, name, participants, distance, best_time } = req.body;
  const style = { distance, participants, best_time };
  const sport = new Sport({ id, name, style });

  sport.save(function (err, sport) {
    if (err) return next(ApiError.ServerError);
    res.json(sport);
  })
};


exports.updateBestTime_byId = (req, res, next) => {
  const { id, best_time } = req.body;
  Sport.findOneAndUpdate({ id }, { "style.best_time": best_time }, { new: true }, (err, sport) => {
    if (err) return next(ApiError.ServerError);
    if (!sport) return next(ApiError.NotFoundError);
    res.json(sport);
  })
};

exports.delete_byId = (req, res, next) => {
  const { id } = req.params;
  Sport.findOneAndDelete({ id }, (err, sport) => {
    if (err) return next(ApiError.ServerError);
    if (!sport) {
      return next(ApiError.NotFoundError)
    }
    res.json(sport);
  })
};



