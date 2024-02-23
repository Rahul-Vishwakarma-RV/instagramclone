const mongoose = require("mongoose");
const plm =require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/instaclone");

const userShema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  bio: String,
  posts:[{type: mongoose.Schema.Types.ObjectId, ref: "post"}],
});

userShema.plugin(plm)

module.exports = mongoose.model("user", userShema);