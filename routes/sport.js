const express = require('express');
const router = express.Router();

const sport_controller = require('../controllers/sport');

router.get('/', sport_controller.get_all);
router.get('/:id', sport_controller.find_byId);
router.post('/', sport_controller.create);
router.put('/:id', sport_controller.updateBestTime_byId);
router.delete('/:id', sport_controller.delete_byId);

module.exports = router;