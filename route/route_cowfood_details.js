const express = require("express");
const router = express.Router();

const contro_food_price_details = require("../controller/contro_cowfood_details");

router.get("/", contro_food_price_details.get_cowfood_root);

router.post("/post", contro_food_price_details.post_cowfood_details);
// router.post("/filter", contro_food_price_details);
// router.get("/total", contro_food_price_details);

module.exports = router;
