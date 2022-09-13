const express = require("express");
const router = express.Router();

const contro_cow_details = require("../controller/contro_cow_details");

router.get('/', contro_cow_details.get_cow_details_root);

router.get('/get', contro_cow_details.get_cow_details);

router.post('/post', contro_cow_details.post_cow_details);
module.exports = router;
