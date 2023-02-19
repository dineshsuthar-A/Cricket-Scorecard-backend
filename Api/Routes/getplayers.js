const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const middle = require("../middleware/auth");
const c = require("../Controller/getplayers");

router.use(bodyParser.json());

router.get('/api/getbatsman', middle.verifyToken, c.getbatsman);

router.get('/api/getbowlers', middle.verifyToken, c.getbowlers);

module.exports = router;