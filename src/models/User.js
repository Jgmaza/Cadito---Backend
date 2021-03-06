const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  display_name: {type: String,required: true,},
  username: {type: String,unique: true,required: true,},
  password: {type: String,required: true,},
});

const User = mongoose.model('User', schema);

module.exports = User