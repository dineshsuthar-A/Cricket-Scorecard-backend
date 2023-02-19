const bcrypt = require('bcrypt');
const con = require("../../db/dbconfig");
const jwt = require('jsonwebtoken');

exports.LoginUser = async (req, res) => {
    await con.query("select * from usertable where mobile = ? ", [req.body.mobile], (err, result) => {
        if (!req.body.mobile) {
            if (!req.body.password) {
                res.status(400);
                res.send({
                    error: "Enter mobile and password."
                });
                return res;
            } else {
                res.status(400);
                res.send({
                    error: "Enter Mobile number."
                }
                );
                return res;
            }
        }
        if (!req.body.password) {
            res.status(400);
            res.send({
                error: "Enter password."
            });
            return res;
        }
        if (err) {
            res.status(400);
            res.send({
                error: "try again"
            });
            return res;
        }
        if (result.length === 0) {
            res.status(404);
            res.send({
                error: "No user Found"
            });
            return res;
        }
        const user = {
            id: result[0].id,
            name: result[0].name,
            mobile: req.body.mobile,
        }
        const resul = bcrypt.compareSync(req.body.password, result[0].password);

        if (resul) {
            const jasonToken = jwt.sign({ user }, 'secretkey');

            res.status(200);
            res.json({
                token: jasonToken
            });
            return res;

        } else {
            res.status(403);
            res.send({
                error: "Invalid mobile and password"
            });
            return res;
        }

    });
}