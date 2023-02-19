const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const middle = require("../middleware/auth");
const c = require("../Controller/createTeam_controller");

router.use(bodyParser.json());

router.post('/api/match/add/team', middle.verifyToken, c.createTeam);

module.exports = router;

