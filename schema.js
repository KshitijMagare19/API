const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        uname : String,
        email : String,
        phoneno : String,
    },
    {
        collection: "userInfo",
    }
);

mongoose.model("userInfo",UserDetailsSchema);
