var express = require('express');
var router = express.Router();
var ctrlHome = require("../controllers/main.js");

/* GET home page. */
router.get('/', ctrlHome.home);

module.exports = router;
