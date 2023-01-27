const Express = require("express");
const UserModel = require("../models/User.model");
const router = Express.Router();
const bcrypt = require("bcrypt");
const { hashPasswordPromise } = require("../utils/validationUtil");

const updateUserOptions = {
  runValidators: true,
};

router.get("/", (req, res, next) => {
  UserModel.find()
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json({
          message: "Users fetched successfully!!",
          data: response,
        });
      } else {
        res.status(200).json({
          message: "No users found!!!",
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

router.get("/:userId", (req, res, next) => {
  const { params } = req;
  console.log(params);
  UserModel.find({ _id: params.userId })
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json({
          message: "User fetched successfully!!",
          data: response,
        });
      } else {
        res.status(200).json({
          message: "No user found!!!",
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

  if (body.password) {
    req.body.hashedPassword = await bcrypt.hash(body.password, 10);
  }
  const UserInstance = new UserModel({
    name: body.name,
    email: body.email,
    password: body.hashedPassword,
    city: body.city,
    mobileNumber: body.mobileNumber,
  });
  UserInstance.save()
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

// router.put("/:productId", async (req, res, next) => {
//   const { body } = req;
//   const { params } = req;
//   ProductsModel.findOneAndUpdate(
//     { _id: params.productId },
//     body,
//     updateProductOptions
//   )
//     .then((response) => {
//       if (response._id) {
//         res.status(200).json({
//           message: "Product created",
//           data: response,
//         });
//       }
//     })
//     .catch((err) => {
//       if (err) {
//         res.status(400).json({
//           message: err.message,
//           error: err,
//         });
//       }
//     });
// });

// router.delete("/:productId", async (req, res, next) => {
//   const { body } = req;
//   const { params } = req;
//   ProductsModel.findOneAndDelete({ _id: params.productId })
//     .then((response) => {
//       if (response._id) {
//         res.status(200).json({
//           message: "Product deleted",
//           data: response,
//         });
//       }
//     })
//     .catch((err) => {
//       if (err) {
//         res.status(400).json({
//           message: err.message,
//           error: err,
//         });
//       }
//     });
// });

module.exports = router;
