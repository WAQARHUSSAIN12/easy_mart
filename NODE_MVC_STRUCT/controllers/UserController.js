const mongoose = require('mongoose');
const UsersModel = require("../models/User");
const Category = require("../models/Category");
const Product = require("../models/Product");
//For Register Page
const registerView = (req, res) => {
  res.render("frontend/register", {});
};

//Post Request for Register

const registerUser = (req, res) => {
//   const { name, email, location, password, confirm } = req.body;

//   if (!name || !email || !password || !confirm) {
//     console.log("Fill empty fields");
//   }

//   //Confirm Passwords

//   if (password !== confirm) {
//     console.log("Password must match");
//   } else {
//     //Validation
//     User.findOne({ email: email }).then((user) => {
//       if (user) {
//         console.log("email exists");
//         res.render("register", {
//           name,
//           email,
//           password,
//           confirm,
//         });
//       } else {
//         //Validation
//         const newUser = new User({
//           name,
//           email,
//           location,
//           password,
//         });
//         //Password Hashing
//         bcrypt.genSalt(10, (err, salt) =>
//           bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if (err) throw err;

//             newUser.password = hash;
//             newUser
//               .save()
//               .then(res.redirect("/login"))
//               .catch((err) => console.log(err));
//           })
//         );
//       }
//     });
//   }
};

// For View
const loginView = (req, res) => {
  res.render("frontend/login", {});
};

const getUsers = (req,res)=>{
  UsersModel.find()
  .then(user => {
    res.send(user)
  })
  .catch(err => {
      res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
  })
}

// INSERT NEW USER
const insertUser = (req,res)=>{
  var userDetails = new UsersModel({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    devliveryAddress: req.body.devliveryAddress,
    userType: req.body.userType,
    password: req.body.password,
  });
  userDetails.save((err, doc) => {
        if (!err){
          console.log('User added successfully!');
          res.send({ message : "User added successfully"});
        }
        else{
          console.log('Error during record insertion : ' + err);
          res.send({ message : 'Error during record insertion : ' + err});
        }
  });
}

// Logging in Function
const loginUser = (req, res) => {
//   const { email, password } = req.body;
//   //Required
//   if (!email || !password) {
//     console.log("Please fill in all the fields");
//     res.render("login", {
//       email,
//       password,
//     });
//   } else {
//     passport.authenticate("local", {
//       successRedirect: "/dashboard",
//       failureRedirect: "/login",
//       failureFlash: true,
//     })(req, res);
//   }
};

module.exports = {
  insertUser,
  getUsers,
};