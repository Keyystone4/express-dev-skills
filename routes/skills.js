var express = require('express');
var router = express.Router();

// require the controller with functionality
var skillsCtrl = require('../controllers/skills');

// all actual paths start with '/skills'

// GET
router.get('/', skillsCtrl.index);
// GET / skills/ new
router.get('/new', skillsCtrl.new);
// GET individual skill
router.get('/:id', skillsCtrl.show);
// GET / skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
// POST / skills
router.post('/', skillsCtrl.create);
// DELETE/ skills/:id
router.delete('/:id', skillsCtrl.delete);
//PUT// skill/:id
router.put('/:id', skillsCtrl.update);
module.exports = router;
