const bcrypt = require('bcrypt');
const con = require("../../db/dbconfig");



exports.userdata = (req, res) => {
    res.status(200).send(req.user.user);
}