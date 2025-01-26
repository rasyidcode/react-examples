import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import session from "express-session";
import bcrypt from "bcrypt";
import User from "./models/User.js";
import authRoute from "./routes/auth.js";
import verifyBasicAuth from "./middleware/verifyBasicAuth.js";
import { isLoggedIn } from "./middleware/session.js";

// read .env
dotenv.config();

// connect to db
try {
  await mongoose.connect(process.env.MONGO_URI);
} catch (err) {
  console.error(err);
}

const port = process.env.PORT || 9000;
const app = express();

// middleware
app.use(morgan("common"));
app.use(helmet());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 5,
    },
  })
);

// add user admin
app.post(
  "/create-user-admin",
  express.urlencoded({ extended: true }),
  verifyBasicAuth,
  async (req, res) => {
    try {
      if (!req.body.username || !req.body.email || !req.body.password) {
        throw new Error("Missing required fields");
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const newAdmin = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        role: "admin",
      });

      const user = await newAdmin.save();

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message ?? "something went wrong" });
    }
  }
);

app.use("/api/auth", authRoute);
app.get("/api/users", isLoggedIn, async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message ?? "something went wrong" });
  }
});

// event listener
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
