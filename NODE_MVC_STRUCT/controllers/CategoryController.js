const mongoose = require('mongoose');
const UsersModel = require("../models/User");
const Category = require("../models/Category");
const Product = require("../models/Product");

const getCategories = (req,res)=>{
  Category.find()
  .then(categories => {
    res.send(categories);
  })
  .catch(err => {
      res.status(500).send({ message : err.message || "Error Occurred while retriving user information" });
  })
}

const getCategory = (req,res)=>{
  Category.findOne({_id: req.body.id})
  .then(category => {
    res.send(category);
  })
  .catch(err => {
      res.status(500).send({ message : err.message || "Error Occurred while retriving user information" });
  })
}

const insertCategory = (req,res) => {
  console.log(req.body);
  const name = req.body.name;
  var categoryDetails = new Category({
    name: name,
  });
  categoryDetails.save((err, doc) => {
        if (!err){
          console.log('Category added successfully!');
          res.send({ message : "Product category added successfully"});
        }
        else{
          console.log('Error during record insertion : ' + err);
          res.send({ message : 'Error during record insertion : ' + err});
        }
  });
}

module.exports = {
  insertCategory,
  getCategories,
  getCategory,
};