const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const middle = require("../middleware/auth");
const user = require("../Controller/user_control");

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.get('/api/user', middle.verifyToken, user.userdata);

module.exports = router;
