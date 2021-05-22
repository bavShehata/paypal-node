const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

const routes = function (app) {
  app.get("/home", async (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
  });
};

routes(app);
app.listen(port, () => console.log(`server running at port ${port}`));
