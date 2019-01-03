const express = require('express');
const router = express.Router();

const sport_controller = require('../controllers/sport');

router.get('/', sport_controller.get_all);
router.get('/:name', sport_controller.find_byName);
router.get('/:name/:country', sport_controller.find_byNameAndCountry);
router.post('/', sport_controller.create);
router.put('/', sport_controller.updateBestRecord_byId);
router.delete('/:id', sport_controller.delete_byId);

module.exports = router;