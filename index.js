import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true }));

const Adjective = [
  "Affable",
  "Amicable",
  "Caring",
  "Thoughtful",
  "Beautiful",
  "Classy",
  " Precious",
  "Impressive",
  "Irreplaceable",
  "Trustworthy",
  "Understanding",
  " Sweet",
  "Amazing",
  "Fbulous",
];


 app.get("/", (req, res) => {
   res.render("index.ejs");  
 });

 app.get("/blog", (req, res) => {
  const defaultMessage = " ";
  const message = defaultMessage;
  res.render("blog.ejs", {
    Adjective: Adjective,
    Message: message,
    DisplayAdjectives: false,
  });
});

 
 app.post("/submit", (req, res) => {
  const message = req.body.message || "";
  const randomAdjective = Adjective[Math.floor(Math.random() * Adjective.length)];

   
  res.render("blog.ejs", {
    Adjective: randomAdjective,   
    Message: message,
    DisplayAdjectives: true,
  });
});


app.listen(port, () =>{
    console.log(`server running on ${port}.`);
});