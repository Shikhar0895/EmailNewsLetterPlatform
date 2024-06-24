import mongoose from "mongoose";

const { Schema } = mongoose;

const membershipSchema = new Schema(
  {
    user: {
      type: String,
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
