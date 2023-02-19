
const con = require("../../db/dbconfig");

exports.getAllMatches = (req, res) => {
    con.query("select * from matches", (err, result) => {

        if (err) {
            res.status(400);
            return res;
        }
        else {
            res.status(200);
            res.send({
                result
            });
            return res;
        }
    });
    return res;
}

exports.getMyMatches = (req, res) => {
    console.log(req);
    con.query("select * from matches where hostid = " + req.user.user.id + "", (err, result) => {

        if (err) {
            res.status(400);
            return res;
        }
        else {
            res.status(200);
            res.send({
                result
            });
            return res;
        }
    });
    return res;
}

exports.searchmatch = (req, res) => {
    console.log(req.body);
    con.query("select * from matches where id = " + req.body.id + "", (err, result) => {

        if (err) {
            res.status(400);
            return res;
        }
        else {
            res.status(200);
            res.send({
                result
            });
            return res;
        }
    });
    return res;
}