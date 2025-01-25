import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and
// will take control of requests starting with the path /record
const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  const results = await db.collection("records").find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  const result = await db.collection("records").findOne({
    _id: new ObjectId(req.params.id),
  });
  if (!result) res.send("Not Found").status(404);

  res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  try {
    const newDocument = {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    };
    const result = await db.collection("records").insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error adding record");
  }
});

export default router;
