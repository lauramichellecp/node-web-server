import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  handle: String,
  stats: {
    comments: Number,
    retuits: Number,
    likes: Number,
    dislikes: Number
  },
  time: String,
  avatarImg: String,
  logoImg: String,
  postedBy: {
    username: String
  }
}, {collection: 'tuits'});
export default schema;