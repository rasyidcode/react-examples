import User from "../models/User.js";

export const isLoggedIn = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: "unauthorized" });
  }

  const user = await User.findById(req.session.userId);
  if (!user) {
    return res.status(401).json({ error: "unauthorized" });
  }

  return next();
};

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.session.userId);
  if (!user || user.role !== "admin") {
    return res.status(403).json({ error: "access denied" });
  }

  return next();
};
