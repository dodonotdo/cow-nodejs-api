const express = require("express");
const db = require("../config/mysql");

const get_milk_price_details_root = (req, res) => {
  res.send("welcome to the milk price details page");
};

const get_milk_price_details = async (req, res) => {
  db.query("SELECT * FROM milkPriceDetails", (err, result) => {
    try {
      res.status(200).json({ data: result });
    } catch {
      throw err;
    }
  });
};

const post_milk_price_details = (req, res) => {
  var sql = `INSERT INTO  milkPriceDetails (cow_name, liters, per_ltr_rate, total_milk_price) VALUES ('${req.body.cow_name}', '${req.body.liters}', '${req.body.per_ltr_rate}', ('${req.body.liters}'*'${req.body.per_ltr_rate}'))`;
  db.query(sql, req.body, (err, results) => {
    try {
      res.send({
        count: results.insertId,
        Status: "Insert records successfully",
      });
    } catch {
      res.send({ Status: "Please fill the valid input", err: err });
    }
  });
};

// const filter_cow_milk_details = (req, res) => {
//   var sql = `SELECT * FROM milkPriceDetails WHERE cow_name='${req.body.cow_name}'`;
//   db.query(sql, req.body, (err, result) => {
//     try {
//       res.send({ Result: result });
//     } catch {
//       res.send(err);
//     }
//   });
// };

const tablesjoin_cow_milk_details = (req, res) => {
  var sql = `SELECT b.cow_name, a.liters, a.per_ltr_rate, a.total_milk_price FROM milkPriceDetails AS a
             INNER JOIN cowdetails AS b ON b.cow_name = a.cow_name WHERE b.cow_name ='${req.body.cow_name}'`;
  db.query(sql, req.body, (err, result) => {
    try {
      res.send({ Result: result });
    } catch {
      res.send(err);
    }
  });
};

const total_cow_milk_details = (req, res) => {
  var sql = `SELECT SUM(total_milk_price) AS Total_earned_amount FROM milkPriceDetails`;
  console.log(sql);
  db.query(sql, (err, result) => {
    try {
      res.send({ Result: result[0] });
    } catch {
      res.send(err);
    }
  });
};  



module.exports = {
  get_milk_price_details_root,
  get_milk_price_details,
  post_milk_price_details,
  tablesjoin_cow_milk_details,
  total_cow_milk_details,
};
