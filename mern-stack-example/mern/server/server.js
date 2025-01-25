import express from "express";
// import cors from 'cors'
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

// app.use(cors()) // allow client to connect to the server
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use("/records", records);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
