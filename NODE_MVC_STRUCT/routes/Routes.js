const express = require("express");
const {
  insertCategory,
  getCategories,
  getCategory,
} = require("../controllers/CategoryController");

const {
  insertProduct,
  getProduct,
} = require("../controllers/ProductController");

const {
  insertUser,
  getUsers,
} = require("../controllers/UserController");

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

router.post("/createProduct",insertProduct); 
router.get("/getProduct",getProduct);

router.get("/getUsers",getUsers);
router.post("/createUser",insertUser);

// Dashboard
// router.get("/dashboard", dashboardView);
// //post route 
// router.post("/register", registerUser);
// router.post("/login", loginUser);

module.exports = router;