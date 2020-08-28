let ProductModel = require("../models/Product");

exports.homepage = (req, res) => {
  ProductModel.all().then((data) => {
    let products = data;
    res.render("pages/homepage", { products: products });
  });
};

exports.add = (req, res) => {
  res.render("products/add-product");
};

exports.store = (req, res) => {
  let product = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  };
  ProductModel.create(product).then((id) => {
    res.redirect("./");
  });
};

exports.show = (req, res) => {
  let id = req.params.id;
  ProductModel.find(id).then((product) => {
    if (product == null) {
      res.status(404).send("Not found");
      return;
    }
    res.render("products/find-product", { product: product });
  });
};

exports.edit = (req, res) => {
  let id = req.params.id;
  ProductModel.find(id).then((product) => {
    if (product == null) {
      res.status(404).send("Not found");
      return;
    }
    res.render("products/edit-product", { product: product });
  });
};

exports.update = (req, res) => {
  let id = req.params.id;
  ProductModel.find(id).then((product) => {
    if (product == null) {
      res.status(404).send("Not found");
      return;
    }

    let updateProduct = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    };

    // Actualiza los datos del producto
    ProductModel.update(product.id, updateProduct).then((id) => {
      // Al terminar redirige el índice
      res.redirect("/");
    });
  });
};

exports.delete = (req, res) => {
  let id = req.params.id;
  ProductModel.find(id).then((product) => {
    if (product == null) {
      res.status(404).send("Not found");
      return;
    }
    ProductModel.delete(product.id).then((id) => {
      res.redirect("/");
    });
  });
};

exports.about = (req, res) => {
  res.render("pages/about-us");
};
