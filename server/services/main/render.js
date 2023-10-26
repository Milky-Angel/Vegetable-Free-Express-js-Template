const axios = require("axios");

exports.index = (req, res) => {
  return res.render("main/index", {
    pageKey: "home"
  });
};

exports.shop = (req, res) => {
  return res.render("main/shop", {
    pageKey: "shop"
  });
};

exports.shop_detail = (req, res) => {
  return res.render("main/shop-detail", {
    pageKey: "shop-detail"
  });
};

exports.contact = (req, res) => {
  return res.render("main/contact", {
    pageKey: "contact"
  });
};

exports.cart = (req, res) => {
  return res.render("main/cart", {
    pageKey: "pages"
  });
};

exports.chackout = (req, res) => {
  return res.render("main/chackout", {
    pageKey: "pages"
  });
};

exports.testimonial = (req, res) => {
  return res.render("main/testimonial", {
    pageKey: "pages"
  });
};

exports.notFound = (req, res) => {
  return res.render("main/notFound", {
    pageKey: "notFound"
  });
};
