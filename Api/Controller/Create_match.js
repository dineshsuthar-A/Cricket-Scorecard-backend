const bcrypt = require('bcrypt');
const con = require("../../db/dbconfig");


exports.createMatch = async (req, res) => {
    if (!req.body.team1) {
        res.status(400);
        res.send({
            "error": "Team 1 are not their"
        });
        return res;
    }
    if (!req.body.team2) {
        res.status(400);
        res.send({
            "error": "Team 2 are not their"
        });
        return res;
    }
    if (!req.body.stadium) {
        res.status(400);
        res.send({
            "error": "Stadium are not their"
        });
        return res;
    }
    if (!req.body.date) {
        res.status(400);
        res.send({
            "error": "Date are not their"
        });
        return res;
    }
    if (!req.body.overs) {
        res.status(400);
        res.send({
            "error": "Overs are not their"
        });
        return res;
    }
    try {
        await con.query("insert into matches(team1,team2,stadium,date,overs,status,hostid) values('" + req.body.team1 + "','" + req.body.team2 + "','" + req.body.stadium + "','" + req.body.date + "'," + req.body.overs + ", 0,'" + req.user.user.id + "')", (err, result) => {
            if (err) {

                res.status(400);
                res.send({
                    success: false,
                    statusCode: 400,
                    error: err
                });
                return res;
            }
            else {
                con.query("select * from matches where hostid =" + req.user.user.id, (err, result) => {
                    con.query("create table " + result[0].id + req.body.team1 + "(id int NOT NULL AUTO_INCREMENT primary key,name varchar(50),type varchar(50),fours int,sixes int, runscored int,ballplayed int,wicket int, bowls int,run int)");
                    con.query("create table " + result[0].id + req.body.team2 + "(id int NOT NULL AUTO_INCREMENT primary key,name varchar(50),type varchar(50),fours int,sixes int, runscored int,ballplayed int,wicket int, bowls int,run int)");
                    con.query("create table " + result[0].id + "inning1(bowls int,runs int,wicket int)");
                    con.query("create table " + result[0].id + "inning2(bowls int,runs int,wicket int)");
                })

                res.send({
                    success: true,
                    statusCode: 200
                });
                return res;
            }
        });

    } catch (err) {
        res.status(400);
        res.send({
            "error": err
        });
        return res;
    }
    return res;
}