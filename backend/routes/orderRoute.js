const express = require("express");
const { isAuthenticatedUSer, authorizeRoles } = require("../middleware/auth");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUSer, newOrder);

router.route("/order/:id").get(isAuthenticatedUSer, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUSer, myOrders);

router
  .route("/admin/orders")
  .get(isAuthenticatedUSer, authorizeRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUSer, authorizeRoles("admin"), updateOrder)
  .delete(isAuthenticatedUSer, authorizeRoles("admin"), deleteOrder);

module.exports = router;
