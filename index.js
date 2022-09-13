const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const route_cow_details = require("./route/route_cow_details");
const route_milk_price_details = require("./route/route_milk_price_details");
const contro_cowfood_details = require("./route/route_cowfood_details");

app.use("/cowdetails", route_cow_details);
app.use("/milkdetails", route_milk_price_details);
app.use("/fooddetails", contro_cowfood_details);

app.get("/", (req, res) => {
  res.send("Welcome to the cow backend Application!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
