const express = require("express");
const cors = require('cors');

const globalErrHandler = require('./Api/Controller/errorControl');
const app = express();
app.use(cors());

app.use('/', require('./Api/Routes/getMatch'));
app.use('/', require('./Api/Routes/getTeams_route'));
app.use('/', require('./Api/Routes/AddTeam_route'));
app.use('/', require('./Api/Routes/Register_route'));
app.use('/', require('./Api/Routes/Login_route'));
app.use('/', require('./Api/Routes/CreateMatch_route'));
app.use('/', require('./Api/Routes/user.route'));
app.use('/', require('./Api/Routes/userMatch_route'));
app.use('/', require('./Api/Routes/batfirst_route'));
app.use('/', require('./Api/Routes/getplayers'));

app.use(globalErrHandler);
module.exports = app;