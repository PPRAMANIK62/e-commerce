const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateRole,
  deleteUser,
} = require("../controllers/userController");
const { isAuthenticatedUSer, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logoutUser);
router.route("/me").get(isAuthenticatedUSer, getUserDetails);
router.route("/password/update").put(isAuthenticatedUSer, updatePassword);
router.route("/me/update").put(isAuthenticatedUSer, updateProfile);

router
  .route("/admin/users")
  .get(isAuthenticatedUSer, authorizeRoles("admin"), getAllUser);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUSer, authorizeRoles("admin"), getSingleUser)
  .put(isAuthenticatedUSer, authorizeRoles("admin"), updateRole)
  .delete(isAuthenticatedUSer, authorizeRoles("admin"), deleteUser);

module.exports = router;
