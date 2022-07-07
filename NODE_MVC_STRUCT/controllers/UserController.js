const mongoose = require('mongoose');
const UsersModel = require("../models/User");
const Category = require("../models/Category");
const Product = require("../models/Product");

// GET ALL USER FUNCTION
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
          res.send({ message : "User added successfully"});
        }
        else{
          res.send({ message : 'Error during record insertion : ' + err});
        }
  });
}

// UPDATE USER FUNCTION
const updateUser = (req,res)=>{

const id = req.body.id;
const data = {
  name: req.body.name,
  email: req.body.email,
  address: req.body.address,
  devliveryAddress: req.body.devliveryAddress,
  userType: req.body.userType,
}
UsersModel.findByIdAndUpdate({_id:id},data, function(err, result){

  if(err){
      res.send({ message : 'Error during record Update : ' + err});
    }
    else{
      res.send({ message : "User Updated successfully"});
    }
  });
}

// DELETE USER BY ID FUNCTION
const deleteUser = (req,res) =>{
  const id = req.body.userId;
  UsersModel.deleteOne({_id:id}, function(err, result){
    if(err){
      res.send({ message : 'Error during record deletion : ' + err});
    }
    else{
      res.send({ message : "User deleted successfully"});
    }
  });
}

// Logging in Function
const loginUser = (req, res) => {
  const { email, password } = req.body;
  UsersModel.find({$and: [{email: email},
  {password: password}]})
  .then(user => {
    res.send(user);
  })
  .catch(err => {
      res.status(500).send({ message : err.message || "Error Occurred while retriving user information" });
  })  
};

// GET A SINGLE USER WITH ID FUNCTION
const getUser = (req, res) => {
  UsersModel.findOne({_id: req.body.userId})
  .then(user => {
    res.send(user);
  })
  .catch(err => {
      res.status(500).send({ message : err.message || "Error Occurred while retriving user information" });
  })
}

module.exports = {
  insertUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
};