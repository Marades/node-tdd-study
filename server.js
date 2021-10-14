const express = require("express");

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://marades:4202@node-tdd-study.zcvzs.mongodb.net/node-tdd-study?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongo connect"))
  .catch((e) => console.log(e));

const productRoutes = require("./routes");

app.use(express.json());
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, HOST);
console.group(`running on http://${HOST}:${PORT}`);
