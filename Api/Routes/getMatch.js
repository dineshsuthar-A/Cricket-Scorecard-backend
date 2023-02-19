const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const middle = require("../middleware/auth");
const c = require("../Controller/getMatches_control");

router.use(bodyParser.json());

router.post('/api/match/search', middle.verifyToken, c.searchmatch);
router.get('/api/match/get/all', middle.verifyToken, c.getAllMatches);
router.get('/api/match/get/my', middle.verifyToken, c.getMyMatches);


module.exports = router;