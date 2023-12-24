import { utils } from "@pmz/utils";
import { data } from "@pmz/utils/test/data";
import express from "express";

console.log(utils);
console.log(data);

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
