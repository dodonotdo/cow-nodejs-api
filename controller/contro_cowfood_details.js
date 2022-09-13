const express = require("express");
const db = require("../config/mysql");

const get_cowfood_root = (req, res) => {
  res.send("welcome to cow food");
};
const post_cowfood_details = (req, res) => {
  var sql1 = `SELECT SUM(total_milk_price) AS t_amt FROM milkPriceDetails`;
  db.query(sql1, (err, result) => {
    try {
      var result1 = result[0].t_amt;
      var sql2 = `INSERT INTO foodDetails (food_name, kg, amount, total_amt, balance_amt)
      VALUES ('${req.body.food_name}', '${req.body.kg}', '${req.body.amount}','${req.body.kg}'* '${req.body.amount}','${result1}'- ('${req.body.kg}'* '${req.body.amount}'));`;
      db.query(sql2, req.body, (err, result) => {
        try {
          console.log(result);

          res.send({ Result: result.insertId });
        } catch {
          res.send(err);
        }
      });
    } catch {
      res.send(err);
    }
  });
};

module.exports = {
  get_cowfood_root,
  post_cowfood_details,
};

