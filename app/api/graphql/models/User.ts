
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  // Define user fields here matching the GraphQL schema
  first_name: { type: String, required: [true, "first_name fields are required"] },
  last_name: {
    type: String,
    required: [true, "last_name fields are required"],
  },
  email: {
    type: String,
    required: [true, "email fields are required"],
    unique:true
  },
  id: {
    type: String,
    required: [false, "id fields are required"],
  }
});

export default mongoose.models.UserModel || mongoose.model("UserModel", userSchema);