const express = require('express');
const router = express.Router();
const home = require("./modules/home");
const shorten = require('./modules/shorten')

router.use('/', home);
router.use('/create', shorten)


module.exports = router;