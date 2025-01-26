import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import { isLoggedIn } from "../middleware/session.js";

const router = express.Router();

router.use(express.json());

// sign up
router.post("/signup", async (req, res) => {
  try {
    if (!req.body.username || !req.body.email || !req.body.password) {
      throw new Error("Missing required fields");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    // set userId in session
    req.session.userId = user._id;

    return res.status(200).json({ message: "sign up successful" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message ?? "something went wrong" });
  }
});

// sign in
router.post("/signin", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error("Missing required fields");
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: "wrong creds" });
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ error: "wrong creds" });
    }

    // set userId in session
    req.session.userId = user._id;

    return res.status(200).json({ message: "sign in successful" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message ?? "something went wrong" });
  }
});

// sign out
router.post("/signout", isLoggedIn, async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) throw new Error("cannot destroy session");

      res.status(200).json({ message: "logout successuful" });
    });
  } catch (err) {
    res.status(500).json({ error: err.message ?? "something went wrong" });
  }
});

export default router;
