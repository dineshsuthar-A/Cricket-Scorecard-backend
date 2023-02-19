const bcrypt = require('bcrypt');
const con = require("../../db/dbconfig");

exports.createTeam = async (req, res) => {

    var matchdata;
    console.log(req.body);
    if (!req.body.team) {
        res.status(400);
        return res;
    }
    if (!req.body.players) {
        res.status(400);
        return res;
    }
    if (!req.body.type) {
        res.status(400);
        return res;
    }
    con.query("select * from matches where hostid=" + req.user.user.id + " and status <> 2", (err, result) => {
        if (err) {
            res.status(400);
            return res;
        }
        else {
            matchdata = {
                id: result[0].id,
                t1: result[0].team1,
                t2: result[0].team2
            }
            if (req.body.team == 1) {
                for (var i = 0; i < req.body.players.length; i++) {
                    con.query("insert into " + matchdata.id + matchdata.t1 + "(name,type) values('" + req.body.players[i] + "','" + req.body.type[i] + "')");
                }
            } else {
                for (var i = 0; i < req.body.players.length; i++) {
                    con.query("insert into " + matchdata.id + matchdata.t2 + "(name,type) values('" + req.body.players[i] + "','" + req.body.type[i] + "')");
                }
            }


        }
    });
    res.status(200);
    res.send({
        "success": true,
        "message": "Data Added Successfully!"
    });


    return res;
}