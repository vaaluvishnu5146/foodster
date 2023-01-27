const Express = require("express");
const UserModel = require("../models/User.model");
const router = Express.Router();
const bcrypt = require("bcrypt");
const { hashPasswordPromise } = require("../utils/validationUtil");
const jwt = require("jsonwebtoken");
const private_key = "foodster_dev_backend";
const updateUserOptions = {
  runValidators: true,
};

router.post("/", (req, res, next) => {
  const { email, password } = req.body;
  UserModel.find({ email: email })
    .then(async (response) => {
      if (response.length > 0) {
        const hashedPass = response[0].password;
        // Load hash from your password DB.
        const match = await bcrypt.compare(password, hashedPass);
        if (match) {
          const token = jwt.sign(
            {
              email: response[0].email,
              role: {
                isS4Readable: true,
                isSRReadable: true,
                isHCReadable: false,
              },
            },
            private_key,
            { expiresIn: 60 * 60 }
          );
          console.log(token);
          res.status(200).json({
            message: "Logged in successfully!!!",
            data: response,
            token: token,
          });
        } else {
          res.status(200).json({
            message: "Email or password don't match",
            data: response,
          });
        }
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

// router.get("/:userId", (req, res, next) => {
//   const { params } = req;
//   console.log(params);
//   UserModel.find({ _id: params.userId })
//     .then((response) => {
//       if (response.length > 0) {
//         res.status(200).json({
//           message: "User fetched successfully!!",
//           data: response,
//         });
//       } else {
//         res.status(200).json({
//           message: "No user found!!!",
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

// router.post("/", async (req, res, next) => {
//   const { body } = req;

//   if (body.password) {
//     req.body.hashedPassword = await bcrypt.hash(body.password, 10);
//   }
//   const UserInstance = new UserModel({
//     name: body.name,
//     email: body.email,
//     password: body.hashedPassword,
//     city: body.city,
//     mobileNumber: body.mobileNumber,
//   });
//   UserInstance.save()
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
//         //   console.log(ProductInstance);
//         res.status(400).json({
//           message: err.message,
//           error: err,
//         });
//       }
//     });
// });

module.exports = router;
