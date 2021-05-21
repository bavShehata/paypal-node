const express = require("express");

const app = express();
const port = 8000;

const routes = function (app) {
  app.get("/testendpoint", async (req, res) => {
    res.send({ data: "This is my test endpoint" });
  });
};

routes(app);
app.listen(port, () => console.log(`server running at port ${port}`));
