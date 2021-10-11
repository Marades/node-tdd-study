const express = require("express");

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();
app.use(express.json());

const productRoutes = require("./routes");

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, HOST);
console.group(`running on http://${HOST}:${PORT}`);
