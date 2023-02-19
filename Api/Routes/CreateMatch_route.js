const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const middle = require("../middleware/auth");
const create = require("../Controller/Create_match");

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.post('/api/match/create',middle.verifyToken, create.createMatch);

module.exports = router;
