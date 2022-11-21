const express = require("express");
const path = require("path");
const fs = require("fs");
// const { getPostById } = require("./stub/posts");
const app = express();

const PORT = process.env.PORT || 3000;
const indexPath = path.resolve(__dirname, "..", "build", "index.html");

// static resources should just be served as they are
app.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);
// here we serve the index.html page
app.get("/users/:email/:details", (req, res, next) => {
  console.log("XXXXXXXXXXXXXXxx");
  const { email, details } = req.params;
  console.log(email, details);
  if (details === "badges") {
    fs.readFile(indexPath, "utf8", (err, htmlData) => {
      if (err) {
        console.error("Error during file reading", err);
        return res.status(404).end();
      }
      //     // get post info
      //     const postId = req.query.id;
      const post = {}; //getPostById(postId);
      //     if (!post) return res.status(404).send("Post not found");

      // return res.status(404).send("Post not found");
      // inject meta tags
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
// listening...
app.listen(PORT, (error) => {
  if (error) {
    return console.log("Error during app startup", error);
  }
  console.log("listening on " + PORT + "...");
});
