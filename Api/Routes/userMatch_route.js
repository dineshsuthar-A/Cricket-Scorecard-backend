const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const middle = require("../middleware/auth");
const userMatch = require("../Controller/userMatch_controller");
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.get('/api/match/user/live', middle.verifyToken, userMatch.userMatch);
router.get('/api/match/user/live/delete', middle.verifyToken, userMatch.userMatchDelete);

module.exports = router;
