const express = require("express");
const path = require("path");
const fs = require("fs");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

// Configuration
var app = express();
const router = express.Router();

const PORT = process.env.PORT || 3000;
const indexPath = "../build/index.html"; //path.resolve(__dirname, "..", "../build", "index.html");

// static resources should just be served as they are
app.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);
// here we serve the index.html page
router.get("/users/:email/:details", (req, res, next) => {
  console.log("XXXXXXXXXXXXXXxx");
  const { email, details } = req.params;
  console.log(email, details);
  if (details === "badges") {
    fs.readFile(indexPath, "utf8", (err, htmlData) => {
      if (err) {
        console.error("Error during file reading", err);
        return res.status(404).end();
      }
      const post = {};
      htmlData = htmlData
        .replace("<title>React App</title>", `<title>${post.title}</title>`)
        .replace("__META_OG_TITLE__", "Badges")
        .replace("__META_OG_DESCRIPTION__", "User Badges")
        .replace("__META_DESCRIPTION__", "User Description")
        .replace(
          "__META_OG_IMAGE__",
          "https://phiilu.com/images/og/840e64ab9334b9d5d555c85e0d073179.png"
        );
      return res.send(htmlData);
    });
  }
});

router.get("/*", (req, res, next) => {
  console.log("XXXXXXXXXXXXXXxx");
  const { email, details } = req.params;
  console.log(email, details);
  fs.readFile(indexPath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("Error during file reading", err);
      return res.status(404).end();
    }
    return res.send(htmlData);
  });
});

app.use(bodyParser.json());
app.use("/.netlify/functions/server", router); // path must route to lambda
app.use("/", (req, res) => res.sendFile(path.join(__dirname, "../index.html")));

module.exports = app;
module.exports.handler = serverless(app);
