const express = require("express");
const {
  registerView,
  loginView,
  registerUser,
  loginUser,
  getUsers,
  insertUser,
  insertCategory,
  insertProduct,
  getProduct,
  getCategories,
  getCategory,
 
} = require("../controllers/CategoryController");
const { dashboardView } = require("../controllers/DashboardController");
// const { protectRoute } = require("../auth/protect");
const router = express.Router();
// router.get("/",getUsers);
// router.get("/createUser",insertUser);
// router.get("/register", registerView);
// router.get("/login", loginView);
router.post("/createCategory",insertCategory); 
router.get("/getCategories",getCategories); 
router.post("/getCategory",getCategory); 

// router.get("/createProduct",insertProduct); 
// router.get("/getProduct",getProduct); 
// // Dashboard
// router.get("/dashboard", dashboardView);
// //post route 
// router.post("/register", registerUser);
// router.post("/login", loginUser);

module.exports = router;