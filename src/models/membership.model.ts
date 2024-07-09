import mongoose from "mongoose";

const { Schema } = mongoose;

const membershipSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
    },
    stripeCustomerId: {
      type: String,
    },
    plan: {
      type: String,
    },
  },
  { timestamps: true }
);

const Membership =
  mongoose.models.Memberships ||
  mongoose.model("Memberships", membershipSchema);
export default Membership;
