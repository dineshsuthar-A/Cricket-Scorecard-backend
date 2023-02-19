const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const middle = require("../middleware/auth");
const c = require("../Controller/batFirst_controller");

router.use(bodyParser.json());

router.post('/api/match/batfirst', middle.verifyToken, c.batFirst);

module.exports = router;