
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

const register = require("../Controller/Register_controller");

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.post('/api/register', register.Register);

module.exports = router;

