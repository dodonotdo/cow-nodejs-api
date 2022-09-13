const express = require("express");
const router = express.Router();

const contro_milk_price_details = require("../controller/controO_milk_price_details");

router.get('/', contro_milk_price_details.get_milk_price_details_root);
router.get('/get', contro_milk_price_details.get_milk_price_details);
router.post('/post', contro_milk_price_details.post_milk_price_details);
router.post("/filter", contro_milk_price_details.tablesjoin_cow_milk_details);
router.get("/total", contro_milk_price_details.total_cow_milk_details);

module.exports = router;
