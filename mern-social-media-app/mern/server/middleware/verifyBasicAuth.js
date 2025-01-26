const verifyBasicAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return res
      .status(401)
      .json({ error: "Authorization header missing or invalid" });
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "utf-8"
  );
  const [username, password] = credentials.split(":");

  if (
    username !== process.env.ADMIN_USER &&
    password !== process.env.ADMIN_PASS
  ) {
    return res.status(401).json({ error: "Wrong creds" });
  }

  return next();
};

export default verifyBasicAuth;
