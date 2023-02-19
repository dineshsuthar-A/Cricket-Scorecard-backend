    const bcrypt = require('bcrypt');
    const con = require("../../db/dbconfig");
exports.Register = async (req, res) => {
    try {
        var hashpassword = await req.body.password;
        if (!await req.body.password) {
            res.status(400);
            res.send({
                error: "Password parameter invalid"
            });
        }

        if (! await req.body.mobile) {
            res.status(400);
            res.send({
                error: "Mobile parameter invalid"
            });
            return res;
        }
        if (! await req.body.name) {
            res.status(400);
            res.send({
                error: "Name parameter invalid"
            });
            return res;
        }

        if (await req.body.password.length < 6) {
            res.status(400);
            res.send({
                error: "Password should be of more than 6 digit"
            });
            return res;
        }
        if (await req.body.mobile.length < 10) {
            res.status(400);
            res.send({
                error: "Invalid mobile number."
            });
            return res;
        }
        hashpassword = await bcrypt.hash(hashpassword, 10);
        req.body.password = hashpassword;
    } catch {
        res.status(400);
        res.send({
            error: "Try again!"
        });
        return res;
    }

    try {
        await con.query("insert into usertable(name,mobile,password) values('" + req.body.name + "','" + req.body.mobile + "','" + req.body.password + "')", (err, result) => {
            if (err) {

                res.status(400);
                res.send({
                    success: false,
                    statusCode: 500
                });
                return res;
            }
            else {
                res.send({
                    success: true,
                    statusCode: 200
                });
                return res;
            }
        });
    } catch {
        res.status(400);
        res.send({
            error: "Try again!"
        });
        return res;
    }
    return res;
}

