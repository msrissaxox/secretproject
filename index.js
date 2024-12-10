//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
const app = express();
const port = 3000;
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

//get the password and put it in a variable


//remove this and use body parser to get the data
// const password = document.getElementById("password");

app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

//<form action="/check" method="POST">
app.post("/check", (req, res) => {
    if (req.body.password == "ILoveProgramming"){
    res.sendFile(__dirname + "/public/secret.html");
} else {
    res.sendFile(__dirname + "/public/index.html");

}
    
}
)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})