const mongoose = require("mongoose");

const postShema = mongoose.Schema({
  picture: String,
  caption: String,
  user: {
    type:mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
   date: {
    type: Date,
    default: Date.now,
   },
   likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
     }
   ]
});

module.exports = mongoose.model("post", postShema);