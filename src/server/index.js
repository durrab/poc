var conf = require("config");

const express = require("express");
const os = require("os");

const app = express();

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.listen(conf.get("port") || 8080, () =>
  console.log(`Listening on port ${conf.get("port") || 8080}!`)
);
