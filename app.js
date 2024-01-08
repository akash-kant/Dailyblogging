import express from "express";
import ejs from "ejs";
import bodyparser from "body-parser";

const app = express();
const port = 3000;

const para1 = "The standard Lorem Ipsum passage, used since the 1500s"

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.render("home.ejs",{
        para1 : para1,
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });