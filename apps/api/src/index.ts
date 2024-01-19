import express from "express";
import { database } from "@pmz/database";
import { users } from "@pmz/database/entities";

console.log(database);

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
