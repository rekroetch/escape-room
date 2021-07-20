const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");

// user object, includes array for game puzzles 
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  puzzles: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      winCondition: { type: String, required: true },
      isSolved: { type: Boolean, default: false },
    }   
  ]
});


userSchema.pre(
  'save',
  async function(next) {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);
    
    this.password = hash;
    next();
  }
);
  
  
  userSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    
    return compare;
  }
  
const User = mongoose.model("user", userSchema);

module.exports = User;
