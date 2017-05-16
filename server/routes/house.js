const express = require('express');
const router = express.Router();
var House = require('../controllers/house');

router.get('/', House.showAll);
router.get('/:id', House.showOne);
router.post('/', House.create);
router.put('/:id', House.update);
router.delete('/:id', House.delete);

module.exports = router;
