const mongoose = require('mongoose');
const UsersModel = require("../models/User");
const Category = require("../models/Category");
const Product = require("../models/Product");

// INSERT PRODUCT HERE
const insertProduct = (req,res)=>{
  // console.log(req.body);
  var productDetails = new Product({
    name: req.body.productName ,
    desc: req.body.productDesc ,
    qty:  Number(req.body.qty),
    Price: Number(req.body.price),
    photoUrl:"urlurlurl",
    isActive:true,
    category: [req.body.category],
  });
  productDetails.save((err, doc) => {
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
// GET PRODUCT HERE
const getProduct = (req,res)=>{
  Product.find().populate("category","name")
            .then(product => {
              res.send(product)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
}

module.exports = {
  insertProduct,
  getProduct,
};