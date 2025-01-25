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
    res.send(result).status(201);
  } catch (err) {
    console.log(err);
    res.send("Error adding record").status(500);
  }
});

// This section will help you update a record by id
router.patch("/:id", async (req, res) => {
  try {
    const result = await db.collection("records").updateOne(
      {
        _id: new ObjectId(req.params.id),
      },
      {
        $set: {
          name: req.body.name,
          position: req.body.position,
          level: req.body.level,
        },
      }
    );

    res.send(result).status(200);
  } catch (err) {
    console.log(err);
    res.send("Error updating record").status(500);
  }
});

// This section will help you delete a record by id
router.delete("/:id", async (req, res) => {
  try {
    const result = await db.collection("records").deleteOne({
      _id: new ObjectId(req.params.id),
    });
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.send("Error deleting record").status(500);
  }
});

export default router;
