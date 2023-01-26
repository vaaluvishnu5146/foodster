const Express = require("express");
const ProductsModel = require("../models/Products.model");
const router = Express.Router();

const updateProductOptions = {
  runValidators: true,
};

router.get("/", (req, res, next) => {
  ProductsModel.find()
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json({
          message: "Products fetched successfully!!",
          data: response,
        });
      } else {
        res.status(200).json({
          message: "No products found!!!",
          data: response,
        });
      }
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({
          message: err.message,
          error: err,
        });
      }
    });
});

router.get("/:productId", (req, res, next) => {
  const { params } = req;
  console.log(params);
  ProductsModel.find({ _id: params.productId })
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json({
          message: "Products fetched successfully!!",
          data: response,
        });
      } else {
        res.status(200).json({
          message: "No products found!!!",
          data: response,
        });
      }
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({
          message: err.message,
          error: err,
        });
      }
    });
});

router.post("/", async (req, res, next) => {
  const { body } = req;
  const ProductInstance = new ProductsModel({
    name: body.name,
    description: body.description,
    isActive: body.isActive,
    actualPrice: body.actualPrice,
    image: body.image,
  });
  ProductInstance.save()
    .then((response) => {
      if (response._id) {
        res.status(200).json({
          message: "Product created",
          data: response,
        });
      }
    })
    .catch((err) => {
      if (err) {
        //   console.log(ProductInstance);
        res.status(400).json({
          message: err.message,
          error: err,
        });
      }
    });
});

router.put("/:productId", async (req, res, next) => {
  const { body } = req;
  const { params } = req;
  ProductsModel.findOneAndUpdate(
    { _id: params.productId },
    body,
    updateProductOptions
  )
    .then((response) => {
      if (response._id) {
        res.status(200).json({
          message: "Product created",
          data: response,
        });
      }
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({
          message: err.message,
          error: err,
        });
      }
    });
});

router.delete("/:productId", async (req, res, next) => {
  const { body } = req;
  const { params } = req;
  ProductsModel.findOneAndDelete({ _id: params.productId })
    .then((response) => {
      if (response._id) {
        res.status(200).json({
          message: "Product deleted",
          data: response,
        });
      }
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({
          message: err.message,
          error: err,
        });
      }
    });
});

module.exports = router;
