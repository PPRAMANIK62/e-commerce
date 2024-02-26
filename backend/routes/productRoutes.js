const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const { isAuthenticatedUSer, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/admin/product/new")
  .post(isAuthenticatedUSer, authorizeRoles("admin"), createProduct);

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUSer, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUSer, authorizeRoles("admin"), deleteProduct);

router.route("/product/:id").get(getProductDetails);

module.exports = router;
