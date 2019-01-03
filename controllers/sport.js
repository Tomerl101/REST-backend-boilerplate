const ApiError = require('../utils/apiError');
const Sport = require('../models/sport');

exports.get_all = (req, res, next) => {
  Sport.find({}, (err, sports) => {
    if (err) return next(ApiError.ServerError);
    res.json(sports);
  })
}

exports.find_byName = (req, res, next) => {
  const { name } = req.params;
  Sport.find({ name }, (err, sport) => {
    if (err) return next(ApiError.ServerError);
    if (sport.length == 0) return next(ApiError.NotFoundError);
    res.json(sport);
  })
};

exports.find_byNameAndCountry = (req, res, next) => {
  const { name, country } = req.params;
  Sport.findOne({ name, country }, (err, sport) => {
    if (err) return next(ApiError.ServerError);
    if (!sport) return next(ApiError.NotFoundError);
    res.json(sport);
  })
};

exports.create = (req, res, next) => {
  const { id, name, country, competition, participants, best_record } = req.body;
  const style = { competition, participants, best_record };
  const sport = new Sport({ id, name, country, style });

  sport.save(function (err, sport) {
    if (err) return next(ApiError.ServerError);
    res.json(sport);
  })
};


exports.updateBestRecord_byId = (req, res, next) => {
  const { id: _id, best_record } = req.body;
  Sport.findOneAndUpdate({ _id }, { "style.best_record": best_record }, { new: true }, (err, sport) => {
    if (err) return next(ApiError.ServerError);
    if (!sport) return next(ApiError.NotFoundError);
    res.json(sport);
  })
};

exports.delete_byId = (req, res, next) => {
  const { id } = req.params;
  Sport.findByIdAndDelete(id, (err, sport) => {
    if (err) return next(ApiError.ServerError);
    if (!sport) {
      return next(ApiError.NotFoundError)
    }
    res.json(sport);
  })
};



