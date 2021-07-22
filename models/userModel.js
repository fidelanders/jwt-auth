// const User = [
//   {
//     id: "1",
//     firstName: "John",
//     lastName: "Doe",
//     email: "john@doe.com",
//     password: "test1234",
//   },
// ];

const mongoose=require("mongoose")

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName:String,
  email:String,
  password:String
});

const User = mongoose.model('User', userSchema);
  // ready to go!
module.exports = User;
