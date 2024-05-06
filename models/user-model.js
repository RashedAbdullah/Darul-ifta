import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
});

const FatwaSchema = new mongoose.Schema({
  fatwa_no: {
    type: String,
    required: true,
  },
  categoryEn: {
    type: String,
    required: true,
  },
  categoryBn: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  references: {
    type: Array,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  questioner: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.models.user || mongoose.model("user", UserSchema);
const FatwaModel =
  mongoose.models.all_fatwa || mongoose.model("all_fatwa", FatwaSchema);

export { UserModel, FatwaModel };
