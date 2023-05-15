const express = require("express");
const router = express.Router();
const multer = require("multer");
const Products = require("../models/productModel");

const upload = multer().fields([
  { name: "prodName", maxCount: 1 },
  { name: "prodPrice", maxCount: 1 },
  { name: "prodImage", maxCount: 1 },
]);

router.post("/", upload, async (req, res) => {
  const prodName = req.body.prodName;
  const prodPrice = req.body.prodPrice;
  const prodImage = req.body.prodImage;

  if (!prodName || !prodPrice || !prodImage) {
    console.log("please add all fields");
  }

  const user = new Products({
    prodName,
    prodPrice,
    prodImage,
  });

  await user.save();

  if (user) {
    res.status(201).json({
      _id: user.id,
      prodPrice: user.prodPrice,
      prodImage: user.prodImage,
      prodName: user.prodName,
      message: "Products added successfully",
    });
  } else {
    res.status(400).json({ message: "Invalid User Data" });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Products.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
