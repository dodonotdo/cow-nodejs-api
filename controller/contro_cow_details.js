const express = require("express");
const db = require("../config/mysql");

const get_cow_details_root = (req, res) => {
  res.send({ success: true, message: "welcome to the cow details root" });
};

const get_cow_details = (req, res, next) => {
  db.query("SELECT * FROM cowdetails", (err, result) => {
    if (err) return err;
    res.status(200).json({status: "success",data: result});
  });
};

const post_cow_details = (req, res) => {
  db.query("INSERT INTO cowdetails SET ?", req.body, (error, results) => {
      if (error) throw error;
      res.send({success: "records has been inserted successfully",results: results.insertId});
    }
  );
};

module.exports = { get_cow_details_root, get_cow_details, post_cow_details };
