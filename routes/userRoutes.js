const express = require("express");
const {
register,login, uploadProfileImage, getProfileImage, changePassword, CodeVerification
} = require("../controllers/UserController");
const router = express.Router();

// Define routes for User model
router.post("/register",register); // Create a new user
router.post("/login",login); // login user
router.post("/uploadProfileImage",uploadProfileImage); 
router.get("/getProfileImage/:id",getProfileImage); 
router.put("/changepwd",changePassword); 
router.post("/verifyUser",CodeVerification); 



module.exports = router;
