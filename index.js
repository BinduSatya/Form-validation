const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    console.log(files);
    res.render("index", { tasks: files });
  });
});

app.get("/files/:file", (req, res) => {
  fs.readFile(`./files/${req.params.file}`, "utf-8", (err, filedata) => {
    res.send(filedata);
  });
});

app.post("/create", (req, res) => {
  if (req.body.title.length >= 1) {
    fs.writeFile(
      `./files/${req.body.title.split(" ").join("")}.txt`,
      req.body.description,
      (err) => {
        console.log(err);
      }
    );
  }
  res.redirect("/");
});

app.listen(3000);
