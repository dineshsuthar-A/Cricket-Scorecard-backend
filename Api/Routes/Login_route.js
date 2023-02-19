const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

const login = require("../Controller/Login_controller");

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.post('/api/login', login.LoginUser);

module.exports = router;
