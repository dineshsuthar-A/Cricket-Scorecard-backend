const bcrypt = require('bcrypt');
const con = require("../../db/dbconfig");

exports.getTeams = (req, res) => {
    con.query("select * from matches where hostid =" + req.user.user.id + " and status <> 2", (err, result) => {
        if (err) {
            res.status(400);
            return res;
        } else {
            res.status(200);
            res.send({
                team1: result[0].team1,
                team2: result[0].team2
            })
            return res;
        }
    })
    res.status(200);
    return res;
}