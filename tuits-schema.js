import mongoose from "mongoose";

const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  dislikes: Number,
  comments: Number,
  retuits: Number,
  handle: String,
  time: String,
  avatarImg: String,
  logoImg: String,
  postedBy: {
    username: String
  }
}, {collection: 'tuits'});

export default schema;