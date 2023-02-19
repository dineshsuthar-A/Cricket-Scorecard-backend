const bcrypt = require('bcrypt');
const con = require("../../db/dbconfig");

exports.userMatch = async (req, res) => {
    await con.query("select * from matches where hostid  = '" + req.user.user.id + "' and status <> 2", (err, result) => {
        if (err) {
            res.status(400);
            res.send({
                "error": err
            });
            return res;
        }
        if (result.length == 0) {
            res.status(404);
            res.send({
                "error": "Data not Found"
            });
            return res;
        }

        res.status(200);
        res.send({
            "id": result[0].id,
            "team1": result[0].team1,
            "team2": result[0].team2,
            "date": result[0].date,
            "stadium": result[0].stadium,
            "status": result[0].status,
            "Inning": result[0].Inning,
            "overs": result[0].overs
        });
        return res;
    });
}
exports.userMatchDelete = async (req, res) => {
    await con.query("select * from matches where hostid = " + req.user.user.id, (er, res) => {
        con.query("drop table " + res[0].id + res[0].team1);
        con.query("drop table " + res[0].id + res[0].team2);
        con.query("drop table " + res[0].id + "inning1");
        con.query("drop table " + res[0].id + "inning2");
    });
    await con.query("delete from matches where hostid ='" + req.user.user.id + "'", (err, result) => {
        if (err) {
            res.status(400);
            res.send({
                "error": err
            });
            return res;
        }
        res.status(200);
        res.send({
            "status": true
        });
    });
}