const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const mongoURL = "mongodb+srv://kshitij:kshitij@cluster0.31yk3iq.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(mongoURL, {
        useNewUrlParser: true
    })
    .then(() =>
        console.log("connteced to database"))
    .catch((e) => console.log(e));


app.listen(5001, () => {
    console.log("Server Is connected");
})

app.post("/post", async (req, res) => {
    console.log(req.body);
    const { data } = req.body.name;

    try {
        if (data == "kshitij") {
            res.send({ status: "ok" });
        }
        else {
            res.send({ status: "User not found" });
        }
    } catch (error) {
        res.send({ status: "Something went wrong" })
    }
})

require("./schema");


const User = mongoose.model("userInfo");

app.post("/register", async (req, res) => {
    
    //console.log(req.body);

    const { name, mail, mob } = req.body;

    try {
        await User.create({
            uname: req.body.uname,
            email: req.body.email,
            phoneno: req.body.phoneno
        });
        console.log( req.body.uname);
        res.send({ status: "Ok" });
    } catch (error) {
        res.send({ status: "Something went wrong" })
    }
})