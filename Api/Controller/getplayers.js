const bcrypt = require('bcrypt');
const con = require("../../db/dbconfig");

exports.getbatsman = (req, res) => {
    var match;
    con.query("select * from matches where hostid=" + req.user.user.id + " and status <> 2", (err, result) => {
        if (err) {
            res.status(400);
            return res;
        } else {
            match = {
                id: result[0].id,
                batfirst: result[0].batfirst
            }
            con.query("select * from " + match.id + match.batfirst + "", (e, r) => {
                if (e) {
                    res.status(400);
                    return res;
                } else {
                    res.send({
                        status: "success",
                        players: r
                    });
                    res.status(200);
                    return res;
                }
            })
        }
    });
    return res;
}


exports.getbowlers = (req, res) => {
    var match;
    con.query("select * from matches where hostid=" + req.user.user.id + " and status <> 2", (err, result) => {
        if (err) {
            res.status(400);
            return res;
        } else {
            if (result[0].batfirst == result[0].team1)
                match = {
                    id: result[0].id,
                    bowlfirst: result[0].team2
                }
            else
                match = {
                    id: result[0].id,
                    bowlfirst: result[0].team1
                }

            con.query("select * from " + match.id + match.bowlfirst + "", (e, r) => {
                if (e) {
                    res.status(400);
                    return res;
                } else {
                    res.send({
                        status: "success",
                        players: r
                    });
                    res.status(200);
                    return res;
                }
            })
        }
    });
    return res;
}