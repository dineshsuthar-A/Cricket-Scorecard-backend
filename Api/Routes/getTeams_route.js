const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const middle = require("../middleware/auth");
const c = require("../Controller/getTeam_controller");

router.use(bodyParser.json());

router.get('/api/get/team', middle.verifyToken, c.getTeams);


module.exports = router;