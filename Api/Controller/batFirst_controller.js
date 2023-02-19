const bcrypt = require('bcrypt');
const con = require("../../db/dbconfig");

exports.batFirst = (req, res) => {
    if (!req.body.team) {
        res.status(400);
        return res;
    }
    con.query("update  matches SET batfirst = '" + req.body.team + "'", (err, result) => {
        if (err) {
            res.status(400);
            res.send({
                err
            });
            return res;
        } else {
            res.status(200);
            res.send({
                "status": "success",
                "message": "Successfull"
            });
            return res;
        }

    })

    return res;
}