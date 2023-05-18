const express = require("express");
const morgan = require("morgan");

const akademii = require("./handlers/akademijaHandler");
const kursevi = require("./handlers/kursHandler");
const viewHandler = require("./handlers/viewHandler");

const db = require("./pkg/db/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.set("view engine", "ejs");

db.init();

app.get("/test", viewHandler.getKursevi);

app.get("/kursevi", kursevi.getAll);
app.get("/kursevi/:id", kursevi.getOne);
app.post("/kursevi", kursevi.create);
app.patch("/kursevi/:id", kursevi.update);
app.delete("/kursevi/:id", kursevi.delete);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("Could not start service");
  }
  console.log("service started successfully on port 10000");
});