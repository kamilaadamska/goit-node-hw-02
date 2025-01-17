const express = require("express");
const router = express.Router();

const { auth } = require("../../service/auth");

const {
  signupHandler,
  loginHandler,
  logoutHandler,
  currentHandler,
  patchSubHandler,
  patchAvHandler,
  verificationHandler,
  isVerifyHandler,
} = require("../../controller/users");

const { upload } = require("../../config/config-multer");

router.post("/signup", signupHandler);

router.post("/login", loginHandler);

router.get("/logout", auth, logoutHandler);

router.get("/current", auth, currentHandler);

router.patch("/", auth, patchSubHandler);

router.patch("/avatars", auth, upload.single("avatar"), patchAvHandler);

router.get("/verify/:verificationToken", verificationHandler);

router.post("/verify", isVerifyHandler);

module.exports = router;
