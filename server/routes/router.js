const express = require("express");
const route = express.Router();

// renter the code in services file
const main = require("../services/main/render");
// const controller = require('../controller/controller');

/*
 * @ discreption Root Routs
 * @method GET/
 */
route.get("/home", main.index);
route.get("/shop", main.shop);
route.get("/shop-detail", main.shop_detail);
route.get("/contact", main.contact);
route.get("/cart", main.cart);
route.get("/chackout", main.chackout);
route.get("/testimonial", main.testimonial);

// Catch-all route for undefined routes
route.get("/404", main.notFound);

/* This catch-all route will match any route that is not explicitly defined, and it will redirect to the /404 page. */
route.get("*", function (req, res) {
  res.redirect("/404");
});

// API
/* 
route.post('/api/user',controller.create)
route.get('/api/user',controller.find)
route.put('/api/user/:id',controller.update)    
route.delete('/api/user/:id',controller.delete)
route.get('/api/user/:id',controller.reteive) 
*/

module.exports = route;
