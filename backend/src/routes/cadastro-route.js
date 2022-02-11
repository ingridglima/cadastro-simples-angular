'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/cadastro-controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/novo', controller.post);
router.delete('/:id', controller.delete);

module.exports = router;