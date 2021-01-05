var express = require('express');
var router = express.Router();
var ctrlHome = require("../controllers/main.js");
var ctrlLocations = require("../controllers/locations.js");
var ctrlOther = require("../controllers/other.js");

/* GET home page. */
router.get('/', ctrlHome.home);
router.get('/locations', ctrlLocations.location);
router.get('/other', ctrlOther.other);

module.exports = router;
