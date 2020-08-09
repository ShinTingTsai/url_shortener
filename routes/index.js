const express = require('express');
const router = express.Router();
const home = require("./modules/home");
const shorten = require('./modules/shorten')
const redirect = require('./modules/redirect')

router.use('/', home);
router.use('/create', shorten)
router.use('/r', redirect)

module.exports = router;