const bcrypt = require("bcrypt");

// CONFIFS FOR PASSWORD HASHING
const rounds = 10;

// CHECKS WHETHER GIVEN INPUT IS A VALID STRING
// EXAMPLE: Hellow world - VALID
// 56HELLO78 - IN-VALID
function validateName(data) {
  console.log("Name", v);
  return /^[a-zA-Z]+$/.test(v);
}

// PASSWORD HASHING
function hashPassword(data) {
  let hashedPass = null;
  bcrypt.hash(data, rounds, function (err, hash) {
    // Store hash in your password DB.
    if (hash) {
      hashedPass = hash;
      console.log(hashedPass);
    }
    if (err) {
      throw new Error("Generating Password Salt failed");
    }
  });
  return hashPassword;
}

async function hashPasswordPromise(data) {
  const result = await bcrypt.hash(data, rounds);
  return result;
}

module.exports = {
  validateName,
  hashPassword,
  hashPasswordPromise,
};
