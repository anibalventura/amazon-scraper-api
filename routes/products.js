import express from "express";
import {
  getProduct,
  getProductReviews,
  getProductOffers,
  getProductsSearch,
} from "../controllers/products.js";

const router = express.Router();

// Get Product Search.
router.get("/product-search/:searchQuery", getProductsSearch);

// GET Product Details.
router.get("/product/:productId", getProduct);

// Get Product Reviews.
router.get("/product-reviews/:productId", getProductReviews);

// Get Product Offers.
router.get("/product-offers/:productId", getProductOffers);

export default router;
